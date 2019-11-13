# Lean Development Example

A central concept of the Lean Development is the Code-Test-Learn feedback loop. The point is to develop a product quickly and put it into users’ hands to receive feedback. This feedback is then analyzed to discover what features customers actually want and to let the company see if the product has demand.

Example: in order to build a function to parse arrays like this:

```javascript
let carArray = ["Ferarri", "Mercedes", "Land Rover", "Nissan"];

function myGarage (inputArray) {
    let output = "In my garage I have ";
    for(let i =0; i<inputArray.length; i++) {
        //console.log(inputArray[i]);
        output += inputArray[i] + ", ";
    }
 return output;
}

console.log(myGarage(carArray));
```

Follow this test-as-you-code strategy:

1. create an array and test to see if there are any errors

    ```javascript
    let carArray = ["Ferarri", "Mercedes", "Land Rover", "Nissan"];
    console.log(carArray); //show: ["Ferarri", "Mercedes", "Land Rover", "Nissan"];
    ```

2. create basic function and test to see if the function has no errors and it is connected to the global array

    ```javascript
    let carArray = ["Ferarri", "Mercedes", "Land Rover", "Nissan"];

    function myGarage (inputArray) {
          return inputArray;
    }

    console.log(myGarage(carArray));  //show: ["Ferarri", "Mercedes", "Land Rover", "Nissan"];
    ```

3. create an output variable inside the function and test to see the if the connection with the output variable works

    ```javascript
    let carArray = ["Ferarri", "Mercedes", "Land Rover", "Nissan"];

    function myGarrage (inputArray) {
        let output = "In my garage I have ";
        return output;
    }

    console.log(myGarrage(carArray));  //show: "In my garage I have ";
    ```
4. create for loop inside the function and test to see if you can identify the elements inside it

    ```javascript
    let carArray = ["Ferarri", "Mercedes", "Land Rover", "Nissan"];

    function myGarage (inputArray) {
        let output = "In my garage I have ";
        for(let i =0; i<inputArray.length; i++) {
            console.log(inputArray[i]);
        }
        return output;
    }

    console.log(myGarage(carArray)); //show "Ferarri", "Mercedes", "Land Rover", "Nissan"
    ```

5. add the for loop items to the output and test everything

    ```javascript
    let carArray = ["Ferarri", "Mercedes", "Land Rover", "Nissan"];

    function myGarage (inputArray) {
        let output = "In my garage I have ";
        for(let i =0; i<inputArray.length; i++) {
            //console.log(inputArray[i]);
            output += inputArray[i] + ", ";
        }
        return output;
    }

    console.log(myGarage(carArray)); //show "In my garage I have "Ferarri", "Mercedes", "Land Rover", "Nissan""
    ```
