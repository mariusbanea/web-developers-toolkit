const { DoubleQueue } = require("./queue-double-class");
const { helperFuncs } = require("./queue-single");

let ourItems = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];

let starTrekQ = new DoubleQueue();

ourItems.forEach((item) => starTrekQ.enqueue(item));

console.log(starTrekQ);

while (starTrekQ.head !== null) {
  starTrekQ.dequeue();
  console.log("Dequeued:\n", starTrekQ);
}

console.log("All are dequeued: ", starTrekQ);