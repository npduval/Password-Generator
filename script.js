// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const numberChar = prompt("How many characters would you like included in your password?")
const specialChar = confirm("Click OK to include special characters")
const numericalChar = confirm("Click OK to include numerical characters")
const lowercaseChar = confirm("Click OK to include lowercase characters")
const uppercaseChar = copnfirm("Click OK to include uppercase characters")