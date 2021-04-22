//(1) integer
let myInteger = 1;
console.log(myInteger); // shows "1"


//(2) string
let myString = 'dog';
console.log(myString); // shows "dog"


//(3) boolean
let myBoolean = true;
console.log(myBoolean); // shows "true"




//arrays and objects have key (index) and values pairs

//(4) arays have integer as keys
let computers = ["server", "desktop", "tablet"];
//is a shortcut for ..
//let computers = [0: "server", 1: "desktop", 2: "tablet"];
console.log(computers[0]); // shows "server"

//(5) objects have string as keys
let car = {
    "make": "Nissan",
    "model": "Terrano",
    "engine": "3.5l"
};
console.log(car.make); // shows "Nissan"


let carDetails = {
    "make": "Nissan",
    "model": "Terrano",
    "engine": {
        "bhp": "160",
        "size": "3.5l",
        "turbo": true
    },
    //methods are functions living inside objects
    myCar: function() {
        return `My Car is a ${this.make} ${this.model}`;
    }
};
console.log(carDetails.engine.turbo); // shows "true"
console.log(carDetails.myCar()); // shows "My Car is a Nissan Terrano"


/* array vs objects
- arrays are having integers as key (0, 1, 2)
- objects are having string as keys ("make", "model")
- arrays are not using too much space on in the memory, but if they are changed, it is hard to retrieve the data
- arrays is inside the square brackets []
- objects are using far more space in the memory, but it is easier to retrieve data
- objects are inside the square brackets {}
- objects can have methods inside, but the arrays can't
*/


/*
(6) The functions are a set of instructions ready to be reused multiple times (is a like a recipe in a cook book)

function definition used to create code templates https://github.com/mariusbanea/web-developers-toolkit/blob/master/js/functions/functions-and-objects-theory-with-examples.js

 function components:
 -- function name (ex: "addingNumbers") (example: like a the recipe title)
 -- input parameters or arguments (ex: "parameter1", "parameter2") (example: like a set of ingredients in a recipe)
 -- output parameters or arguments (ex: "result") (example: like the description of what dish gets cooked from that recipe)
 -- some set of instructions to convert the input parameters into output (ex: "let result = parameter1 + parameter2;") (example: like the steps to cook the ingredients to create a dish in a recipe)

function definition:
*/
function addingNumbers(parameter1, parameter2) {
    let result = parameter1 + parameter2;
    return result;
};
//function usage or call (example: like cooking a recipe from the cook book)
console.log(addingNumbers(3, 4)); //result is 7
console.log(addingNumbers(2, 9)); //result is 11