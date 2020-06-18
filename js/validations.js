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

function checkString(inputString) {
    let outputText = inputString;
    if (inputString === undefined) {
        outputText = "";
    }
    if (inputString == null) {
        outputText = "";
    }
    return outputText;
}

function checkURL(inputURL) {
    let outputURL = inputURL;
    if (inputURL === undefined) {
        outputURL = "/";
    }
    if (inputURL == null) {
        outputURL = "/";
    }
    return outputURL;
}

function validateEmail(inputEmail) {
    let outputEmail = inputEmail;
    //basic email validation
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
        outputEmail = ""
    }
    return outputEmail
}

function validateUsername(inputUsername) {
    let outputUsername = inputUsername;
    // only lowercase and uppercase letters and dash
    let userformat = /^[a-zA-Z\-]+$/;
    if (!inputUsername.match(userformat)) {
        outputUsername = ""
    }
    return outputUsername
}

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
console.log(validateEmail("hey@gmail.com"));
console.log(validateUsername("Abcde-fg"));
console.log(validatePassword("Ab1234_6"));
