//use if you know both ends of the loop (START and STOP)
//ex: count between START and STOP value using the STEP
for (let counter = START; counter < STOP; counter + STEP) {
    console.log("I am doing stuff");
}

//ascending for loop
for (let a = 0; a <= 100; a += 3) {
    console.log(a);
}

//descending for loop
for (let b = 5000; b >= 2000; b -= 100) {
    console.log(b);
}



//use if you know only one end of the loop (START or STOP) so we will call it LIMIT
//ex: count up (or down) to the LIMIT value using the STEP
let counter = VALUE;
while (counter < LIMIT) {
    console.log("I am doing stuff");
    //count towards the limit using some step value
    counter + STEP;
}

//ascending while loop going TOWARDS the limit (counting 0 to 1000 upwards)
let c = 0;
while (c < 1000) {
    c++;
}

//ascending while loop going AWAY from the limit (counting from 5000 upwards)
let d = 5000;
while (d > 5000) {
    d++;
} // ATTENTION: creates INFINITE LOOPS

//descending while loop going TOWARDS the limit (counting 10000 to 5000 downwards)
let e = 10000;
while (e > 5000) {
    e--;
};
