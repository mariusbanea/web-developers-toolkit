//Definition:
//A closure is a function inside another function in order to protect the scope of the inner function

//the outer (parent) function
function showName(firstName, lastName) {

    // nameIntro is global variable to the inner function but it is local to the outer function
    let nameIntro = "My name is ";

    // this inner (child) function has access to the outer (parent) function's variables, including the parameter
    function makeFullName() {

        let superSecretVariable = "dog";

        //NOTE: inner function has to return something in order to be used by the outer function
        return nameIntro + firstName + " " + lastName;
    }

    //NOTE: outer function returns the call to the inner function
    return makeFullName();
}

console.log(superSecretVariable) // shows undefined

//call the outer function
showName("James", "Bond"); // My name is James Bond
