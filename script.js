// Assignment Code
const generateBtn = document.querySelector("#generate");
const specialChar = ["!","\"","#","$","%","&","(",")","<","=",">","?","@","[","]","*"];
const numericalChar = [1,2,3,4,5,6,7,8,9,0];
const lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

superArray =[]
finalPassword = []



// Write password to the #password input
function writePassword() {
  const numberPrompt = prompt("How many characters would you like included in your password?")
  const specialPrompt = confirm("Click OK to include special characters")
  
  if (specialPrompt === true){
    const randomIndex1 = Math.floor(math.random () * specialChar.length);
   // add randomIndex1 to finalPassword
   superArray = concat(specialChar);

  }
  const numericalPrompt = confirm("Click OK to include numerical characters")\

  if (numericalPrompt === true){
    const randomIndex2 = Math.floor(math.random () * numericalChar.length);
   // add randomIndex2 to finalPassword
   superArray = concat(numericalChar);

  }
  const lowercasePrompt= confirm("Click OK to include lowercase characters")

  if (lowercasePrompt === true){
    const randomIndex3 = Math.floor(math.random () * lowercaseChar.length);
   // add randomIndex2 to finalPassword
   superArray = concat(lowercaseChar);
  }
    const uppercasePrompt = confirm("Click OK to include uppercase characters")
  if (uppercasePrompt === true){
    const randomIndex4 = Math.floor(math.random () * uppercaseChar.length);
   // add randomIndex2 to finalPassword
   superArray = concat(lowercaseChar);
  }
    
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password + finalPassword;                                                     
}
                                   


//Add function for generatePassword ( for loop based on user input using math.random from super array minus nuymber of characters already in final password)





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

