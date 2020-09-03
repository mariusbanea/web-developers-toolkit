// As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

// F Jane

// M Frank

// M John

// M Sherlock

// F Madonna

// M David

// M Christopher

// F Beyonce

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance

const { QueueStack } = require("./queue-from-stack");

// Setup a QueueStack for our dancers
const ourDancers = new QueueStack();

// Using an array to populate the QueueStack for simplicity
let dancerArr = [
  { gender: "F", name: "Jane" },
  { gender: "M", name: "Frank" },
  { gender: "M", name: "John" },
  { gender: "M", name: "Sherlock" },
  { gender: "F", name: "Madonna" },
  { gender: "M", name: "David" },
  { gender: "M", name: "Christopher" },
  { gender: "F", name: "Beyonce" },
];
dancerArr.forEach((dancer) => ourDancers.enqueue(dancer));

// Square dance pairing - queue stack version
const squareDance = (queue) => {
  //set up matches 
  const map = {
    F: "M",
    M: "F",
  };

  //Setup QueueStack for those without partners
  const spares = new QueueStack();
  //Point to the current dancer
  let currentDancer = queue.dequeue();

  //while our QueueStack contains dancers
  while (currentDancer !== null) {
    //   if the spare queue is empty, put people in it
    if (spares.stack1.top === null) {
      spares.enqueue(currentDancer);
    } else {
      //   if our current dancer gender is the opposite of the top of our queue
      if (spares.stack1.top.data.gender === map[currentDancer.gender]) {
        //declare a matched dancer
        let dancerMatch = spares.dequeue();
        //log it
        console.log(
          `${dancerMatch.name} is dancing with ${currentDancer.name}`
        );
        // otherwise, add the curent dancer to the spares
      } else {
        spares.enqueue(currentDancer);
      }
    }
    //   Iterate to the next available dancer
    currentDancer = queue.dequeue();
  }
  //   May be left with lonely members. Let's dequeue them
  let lonelyMember = spares.dequeue();
  //while we still have mmembers to dequeue
  while (lonelyMember !== null) {
    //log lone dancer
    console.log(`${lonelyMember.name} doesn't have anyone to dance with.`);
    lonelyMember = spares.dequeue();
  }
};

squareDance(ourDancers);