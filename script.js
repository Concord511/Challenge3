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
    console.log("I also made it here.")
    console.log(length);
    return length;
  }
  else {
    window.alert("Please try again.");
    console.log("I made it here")
    return passwordLength();
  }
}

// function called when user clicks "Generate Password" button
var generatePassword = function() {
  window.alert("Please choose from the following password criteria prompts:");

  // an empty string to hold possible password characters to draw from
  var passwordContains = "";

  // an empty string to hold the actual password
  var password = "";

  // strings containing possible additions to the passwordContains string depending on user input
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = lowers.toUpperCase();
  var symbols = "!'#$%&()*+,-./:;<=>?@[]^_`{}|~\\" + '"';
  var numbers = "0123456789";

  // initiate true/false criteria variables by getting user input
  var hasLower = includeLowerCase();
  var hasUpper = includeUpperCase();
  var hasNumber = includeNumber();
  var hasSymbol = includeSymbol();
  // validate that the user picked at least one criteria
  if (hasLower === false && hasUpper === false && hasNumber === false && hasSymbol === false) {
    window.alert("You must select at least 1 criteria!");
    generatePassword();
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

  console.log("Length of the string is: " + hasLength);
  console.log("Password may contain: " + passwordContains);

  

  for (var i = 0; i < hasLength; i++) {
    var p = Math.floor(Math.random() * passwordContains.length);
    password = password + passwordContains[p];
    console.log(password);
  }

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