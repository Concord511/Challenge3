// function to prompt for lower case inclusion
var includeLowerCase = function() {
  var lowerTrue = window.confirm("Will your new password include at least one LOWER case letter?");
  if (lowerTrue) {
    return true;
  }
  else {
    return false;
  }
}

// function to prompt for upper case inclusion
var includeUpperCase = function() {
  var upperTrue = window.confirm("Will your new password include at least one UPPER case letter?");
  if (upperTrue) {
    return true;
  }
  else {
    return false;
  }
}

// function to prompt for number inclusion
var includeNumber = function() {
  var numberTrue = window.confirm("Will your new password include at least one NUMBER?");
  if (numberTrue) {
    return true;
  }
  else {
    return false;
  }
}

// function to prompt for symbol inclusion
var includeSymbol = function() {
  var symbolTrue = window.confirm("Will your new password include at least one SYMBOL?");
  if (symbolTrue) {
    return true;
  }
  else {
    return false;
  }
}

// function to prompt user for password length, then validate it is within parameters
var passwordLength = function() {
  var length = window.prompt("Please enter a numberic value between 8 - 128");
  length = parseInt(length);
  if (length >= 8 && length <= 128) {
    console.log(length);
    return length;
  }
  else {
    window.alert("Please try again.");
    return passwordLength();
  }
}

// function to generate password with given criteria taken as parameter and validate
var generate = function(criteria, passwordLength) {
  // an empty string to hold the actual password
  var password = "";

  // iterate through the string containing viable password characters and concatenate them upon the password string to return
  for (var i = 0; i < passwordLength; i++) {
    var p = Math.floor(Math.random() * criteria.length);
    password = password + criteria[p];
  }
  console.log("Password generated: " + password);
  return password;
}

// function to validate (true/false) if the password contains at least one character from a subset of the password criteria
var validate = function(criteria, password) {
  for (var i = 0; i < password.length; i++) {
    var letter = password[i];
    for (var j = 0; j < criteria.length; j++) {
      if (letter === criteria[j]) {
        console.log("Match found for " + letter + ". Returning 'true'");
        return true;
      }
    }
  }
  // if the password does not contain at least one of the given criteria, return false
  console.log("Match not found. Returning 'false'");
  return false;
}

// function called when user clicks "Generate Password" button
var generatePassword = function() {
  window.alert("Please choose from the following password criteria prompts:");

  // empty string to hold the password as it's generated and validated;
  var password = ""

  // an empty string to hold possible password characters to draw from
  var passwordContains = "";

  // strings containing possible additions to the passwordContains string depending on user input
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = lowers.toUpperCase();
  var numbers = "0123456789";
  var symbols = "!'#$%&()*+,-./:;<=>?@[]^_`{}|~\\" + '"';
  
  // initiate true/false password criteria inclusion variables by getting user input
  var hasLower = false;
  var hasUpper = false;
  var hasNumber = false;
  var hasSymbol = false;
  
  // function and call to ask for user input
  var getInput = function() {
    hasLower = includeLowerCase();
    hasUpper = includeUpperCase();
    hasNumber = includeNumber();
    hasSymbol = includeSymbol();
  }
  getInput();
  
  // validate that the user picked at least one criteria
  if (hasLower === false && hasUpper === false && hasNumber === false && hasSymbol === false) {
    window.alert("You must select at least 1 criteria!");
    getInput();
  }

  // prompt the user for password length and validate
  var hasLength = passwordLength();

  // if the password criteria is selected, add to the passwordContains string
  if (hasLower) {
    passwordContains = passwordContains + lowers;
  } 
  if (hasUpper) {
    passwordContains = passwordContains + uppers;
  }
  if (hasNumber) {
    passwordContains = passwordContains + numbers;
  }
  if (hasSymbol) {
    passwordContains = passwordContains + symbols;
  }

  // call the function to generate the password and pass it the user-given criteria (passwordContains & length)
  password = generate(passwordContains, hasLength);

  var validation = function() {
    // validate that the criteria is met (at least one of each character from the chosen criteria is present)
    if (hasLower) {
      // if validate false generate new password / validate again
      console.log("Validating if the password contains at least one lower case letter.");
      if (validate(lowers, password) === false) {
        password = generate(passwordContains, hasLength);
        return validation();
      }
    }
    
    if (hasUpper) {
      console.log("Validating if the password contains at least one upper case letter.");
      if (validate(uppers, password) === false) {
        password = generate(passwordContains, hasLength);
        return validation();
      }
    }
    
    if (hasNumber) {
      console.log("Validating if the password contains at least one number.");
      if (validate(numbers, password) === false) {
        password = generate(passwordContains, hasLength);
        return validation();
      }
    }
      
    if (hasSymbol) {
      console.log("Validating if the password contains at least one symbol.");
      if (validate(symbols, password) === false) {
        password = generate(passwordContains, hasLength);
        return validation();
      }
    }

    return password;
  }
    
  password = validation();
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);