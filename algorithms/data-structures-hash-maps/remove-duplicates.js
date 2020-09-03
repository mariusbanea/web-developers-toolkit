const removeDuplicates = (string) => {
    let containerObject = {};
  
    for (letter of string) {
      console.log(letter);
      if (!containerObject[letter]) {
        containerObject[letter] = "";
      }
    }
  
    //   console.log(containerObject);
    return Object.keys(containerObject).join("");
  };
  
  console.log(removeDuplicates("google all that you can"));