// Assignment code here
var includeLowerCase = function() {
  var lowerTrue = window.confirm("Password will include at least one LOWER case letter?");
  if (lowerTrue) {
    return true;
  }
  else {
    return false;
  }
}

var includeUpperCase = function() {
  var upperTrue = window.confirm("Password will include at least one UPPER case letter?");
  if (upperTrue) {
    return true;
  }
  else {
    return false;
  }
}

var includeNumber = function() {
  var numberTrue = window.confirm("Password will include at least one number?");
  if (numberTrue) {
    return true;
  }
  else {
    return false;
  }
}

var includeSymbol = function() {
  var symbolTrue = window.confirm("Password will include at least one symbol?");
  if (symbolTrue) {
    return true;
  }
  else {
    return false;
  }
}

var passwordLength = function() {
  var length = window.prompt("Please enter a numberic value between 8 - 128");
  length = parseInt(length);
  if (length >= 8 && length <= 128) {
    return length;
  }
  else {
    window.alert("Please try again.");
    passwordLength();
  }
}

var generatePassword = function() {
  var passwordContains = "";
  var password = "";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = lower.toUpperCase();
  var symbol = "!'#$%&()*+,-./:;<=>?@[]^_`{}|~\\" + '"';
  var number = "0123456789";
  var length = passwordLength();

  if (includeLowerCase()) {
    passwordContains = passwordContains + lower;
    console.log(passwordContains);
  }
  if (includeUpperCase()) {
    passwordContains = passwordContains + upper;
    console.log(passwordContains);
  }
  if (includeNumber()) {
    passwordContains = passwordContains + number;
    console.log(passwordContains);
  }
  if (includeSymbol()) {
    passwordContains = passwordContains + symbol;
    console.log(passwordContains);
  }
  console.log(length);

  for (var i = 0; i < length; i++) {
    var p = Math.floor(Math.random() * passwordContains.length);
    console.log(p);
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