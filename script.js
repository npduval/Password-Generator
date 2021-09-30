// Assignment Code
const generateBtn = document.querySelector("#generate");
const specialChar = ["!","\"","#","$","%","&","'","(",")","<","=",">","?","@","[","]"];
const numericalChar = [1,2,3,4,5,6,7,8,9,0];
const lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
const uppercaseChar = ["O","P","Q","R","S","T","U","V","W","X","Y","Z"];



// Prompts for perameters of new password
function  prompts() {
    var numberPrompt = prompt("How many characters would you like included in your password?")
    const specialPrompt = confirm("Click OK to include special characters")
    const numericalPrompt = confirm("Click OK to include numerical characters")
    const lowercasePrompt= confirm("Click OK to include lowercase characters")
    const uppercasePrompt = confirm("Click OK to include uppercase characters")
    console.log(numberPrompt)
    console.log(numericalPrompt)
    console.log(lowercasePrompt)
    console.log(uppercasePrompt)

}


// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//Add function for generatePassword





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", prompts);

