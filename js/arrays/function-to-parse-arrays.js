// Original solutions by Teresa B. https://github.com/terabitbaci/
let ARRAY = [
    "hockey",
    "javelin",
    "tug of war",
    "tossing the caber",
    "curling",
    "hammer throw",
    "weight for height",
    "lacrosse",
];





console.log('use a for loop to loop through the ARRAY and console the contents');

//NOTE: using the for loop to parse parts of an array and output a string
for (let key = 0; key < ARRAY.length; key++) {
    console.log(`fun sport ${key}: ${ARRAY[key]}`);
}

console.log('- - - - - - - - - -');





console.log('use a forEach to loop through the ARRAY and console the contents');

// loop through the ARRAY and print the contents to the console using .forEach (https://www.w3schools.com/jsref/jsref_forEach.asp)
// syntax: ARRAY.forEach((itemGoesHere, indexGoesHere)

//NOTE: using the forEach loop to parse the entire array and output a string
ARRAY.forEach((value, key) => console.log(`fun sport ${value}: ${key}`));

console.log('- - - - - - - - - -');





console.log('use a Map to loop through the ARRAY and console the contents');

function sports(value, key) {
    // console.log('ES5 --> we are playing ' + item + '!');
    console.log(`ES6 --> we are playing ${key}: ${value} !`);
};

//NOTE: using the map loop to parse the entire array and output a function
ARRAY.map(sports);

console.log('- - - - - - - - - -');
