const { HashMap } = require("./Hashmap-class");

const main = () => {
  let lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  console.log("before hashing \n", lotr);

  // add items
  const addItems = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandalf" },
    { Human: "Aragorn" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" },
  ];

  addItems.forEach((object) => {
    let middleEarthType = Object.keys(object)[0];
    let name = object[middleEarthType];
    lotr.set(middleEarthType, name);
  });
  //   We have only hashed 9 items instead of 11!
  console.log("after hashing \n", lotr);
  //   Retrieve the value that is hashed in the key "Maiar" and Hobbit.
  const Maiar = lotr.get("Maiar");
  const Hobbit = lotr.get("Hobbit");
  console.log(Maiar, Hobbit);

  //   What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
  //   Before hashing, capacity was 8 and after hashing 9 items, it is again 8 because it was resized automatically to make room.
};

main();