// Assignment code here


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


function generatePassword() {
    //make arrays
    //present a series of prompy
    //choose length 8-128
    //ask whether or not to include at least one lowercase
    //ask whether or not to include at least one uppercase
    //ask whether or not to include at least one numeric
    //ask whether or not to include at least one special characters
    //generate password characters "length" times from random categories
    //check if all criterias are met
    //insert new random characters and delete old characters until all criterias are met
    //run functions and display the password
}