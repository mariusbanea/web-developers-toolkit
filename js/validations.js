//returns 0 if the integer is NOT valid
function checkInteger(inputInteger) {
    let outputValue = inputInteger;
    if (inputInteger == "") {
        outputValue = 0;
    }
    if (inputInteger === undefined) {
        outputValue = 0;
    }
    if (inputInteger == null) {
        outputValue = 0;
    }
    return outputValue;
}
//returns empty string if the string is NOT valid
function checkString(inputString) {
    let outputText = inputString;
    if (inputString === undefined) {
        outputText = "";
    }
    if (inputString == null) {
        outputText = "";
    }
    if (inputString == "") {
        outputText = "";
    }
    return outputText;
}
//returns / if the url is NOT valid
function checkURL(inputURL) {
    let outputURL = inputURL;
    if (inputURL === undefined) {
        outputURL = "/";
    }
    if (inputURL == null) {
        outputURL = "/";
    }
    if (inputURL == "") {
        outputURL = "/";
    }
    return outputURL;
}
//returns a "no-image" image if the image is NOT valid
function checkEmptyImage(inputURL) {
    let outputURL = inputURL
    if (inputURL === undefined) {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    if (inputURL == null) {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    if (inputURL == "") {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    return outputURL
}
//returns empty string if the email is NOT valid
function validateEmail(inputEmail) {
    let outputEmail = inputEmail;
    //basic email validation
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
        outputEmail = ""
    }
    return outputEmail
}
//returns empty string if the username is NOT valid
function validateUsername(inputUsername) {
    let outputUsername = inputUsername;
    // only lowercase and uppercase letters and dash
    let userformat = /^[a-zA-Z\-]+$/;
    if (!inputUsername.match(userformat)) {
        outputUsername = ""
    }
    return outputUsername
}
//returns empty string if the password is NOT valid
function validatePassword(inputPassword) {
    let outputPassword = inputPassword;
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters that are letters, numbers or the underscore
    let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordformat)) {
        outputPassword = ""
    }
    return outputPassword
}

// how to use
console.log(checkInteger(25));
console.log(checkString("hey"));
console.log(checkURL("google.com"));
console.log(checkEmptyImage("something.jpg"));
console.log(validateEmail("hey@gmail.com"));
console.log(validateUsername("Abcde-fg"));
console.log(validatePassword("Ab1234_6"));
