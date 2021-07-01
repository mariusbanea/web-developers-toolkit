# Strategies and Tools for Debugging


### Logical Strategies
1. __divide and conquer__: break the problem into small enough pieces that can be tested one by one
2. __mix and match__: compare and working version of your code from a previous application with the current broken one, in order to mix and match the solutions


### Coding Strategies
1. check if there are any syntax errors in the Web Development Tools => Console
2. check if the connection between the HTML elements and jQuery triggers are working by placing a console.log("here") inside the trigger;
3. check if the jQuery trigger connects to the corresponding function by placing console.log("here") inside the function
4. check if for jQuery nested triggers and avoid them
5. check if the data submitted by the html forms is the same with the data received inside the function using (console log the relevant data)
6. check if every function definition has at least one function usage associated to it
7. check if data flows between cascading functions by console log the input parameters after the first line in the function and the value of output just before the return in the same function
8. check if the "if" statements are true by placing console.log("here") inside them or console log the comparison items before the "if"
9. check if the "while" are counting towards the limit to avoid infinite loops
10. check if the "for" loops are counting by placing console.log("here") inside them
11. check if existing code can be scaled up for large volumes (for example login 1000 users per second) by verifying the Big-O complexity (https://en.wikipedia.org/wiki/Big_O_notation)


### Debugging Tools (https://www.w3schools.com/js/js_debugging.asp)
* console.log() or alert()
    * If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window
    ```javascript
    console.log("this is the client name ==>", client_name, "<==")
    ```
* debugger; (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
    * The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.
    * This has the same function as setting a breakpoint in the debugger.
    * If no debugging is available, the debugger statement has no effect.
    * With the debugger turned on, this code will stop executing before it executes the third line.
* web development tools + breaking points
    * In the debugger window, you can set breakpoints in the JavaScript code.
    * At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.
    * After examining values, you can resume the execution of code (typically with a play button).
* use strict
    * used to display logical errors (not only syntax ones) like any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.
* JS Lint (https://www.jslint.com)
    * takes a JavaScript source and scans it. If it finds a problem, it returns a message describing the problem and an approximate location within the source. The problem is not necessarily a syntax error, although it often is. JSLint looks at some style conventions as well as structural problems. It does not prove that your program is correct. It just provides another set of eyes to help spot problems.
* for performance Web Dev tools > Network / Timeline / Audit



### Most Common Coding Mistakes:
* typos:
    * __to avoid__ define a variable, object, array or function then use copy / paste instead of typing repeatedly;
* typing too fast with a lot of mistakes:
    * __to avoid__ if you use the backspace more than 3 time for line of code it means that the hands are moving way to fast and the brain has a hard time catching up; slow your typing to about 50% to increase the code accuracy and efficiency
* carelessly selecting the wrong code for cut / copy / paste or delete operations:
    * __to avoid__ make sure to include the closing and opening parenthesis, curly / square brackets, etc.
* ignoring the error output and guessing a solution, which usually leads to breaking the code further before fixing it:
    * __to avoid__ spend more time understanding the problem in order to find the solution easier
* trying to optimize code that was not written yet
    * __to avoid__ initially write the code focusing on functionality and only after that review it to opitimize it for maintenance and for speed



### Most Common Misconceptions:
* I haven’t changed anything, and it broke by itself!
    * it is not possible to have different outputs for the same input (Einstein definition of insanity), so something must have been changed between the time when the app worked and now that it is not
* I can’t see the difference between the working code and the broken one!
    * assume that what you are looking for is already in front of your eyes; just look hard enough and long enough for it
* It is easier to guess the solution than to understand the problems!
    * spend more time reading and understanding the problem than fixing it; if you are doing it the other most likely you are guessing the solution, which might lead to breaking the code further before fixing it
* It takes too long to fix the code!
    * it takes about 90% of the time to find a bug and 10% to fix it; if you test often enough, the only place to search for and error would be the last few lines that were not tested