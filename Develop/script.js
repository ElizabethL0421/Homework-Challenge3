// Assignment code here

function generatePassword() {
  
  //make arrays
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  // for the uppercase situation, we could use "toUpperCase" function
  var SpcChara = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?", "/", "<", ">"]
  
  //randomly pick a password character type
  var ctg = ["num", "lwr", "upr", "spc"];

  //use 1 to present yes, and 0 to present no
  var wantnum = 0;
  var wantlwr = 0;
  var wantupr = 0;
  var wantspc = 0;

  //make a starter password
  var pswd = ["q"];
  
  //present a series of prompy
  function frst() {
    //choose length 8-128
    var userChoice1 = window.prompt("Choose a password length of at least 8 characters and no more than 128 characters. Please enter an integer between 8 and 128 (including 8 and 128).");
    console.log(userChoice1);
    //check if the user entered an integer

    function isInteger(userChoice1){
      var numCopy = parseFloat(userChoice1);
      return !isNaN(numCopy) && numCopy == numCopy.toFixed();
    }
    
    if (isInteger(userChoice1) && parseInt(userChoice1) >= 8 && parseInt(userChoice1) <= 128) {
      window.alert("Good job! Press ok and continue to the next question.");
    } else {
      window.alert("Please enter a valid answer.");
      frst();
    }
  }

  frst();

  function scnd() {
    //ask whether or not to include at least one lowercase
    var userChoice2 = window.prompt("Do you want your password to have at least one lowercase character? Enter Y for Yes, N for No.").toUpperCase();
    console.log(userChoice2);
    //check if the user's answer is valid
    if (userChoice2 === "Y") {
      window.alert("Good job! Press ok and continue to the next question.");
      wantlwr++;
    } else if (userChoice2 === "N") {
      window.alert("Good job! Press ok and continue to the next question.");
    } else {
      window.alert("Please enter a valid answer.");
      scnd();
    }
  }

  scnd();
  
  function thrd() {
    //ask whether or not to include at least one uppercase
    var userChoice3 = window.prompt("Do you want your password to have at least one uppercase character? Enter Y for yes, N for No.").toUpperCase();
    console.log(userChoice3);
    //check if the user's answer is valid
    if (userChoice3 === "Y") {
      window.alert("Good job! Press ok and continue to the next question.");
      wantupr++;
    } else if (userChoice3 === "N") {
      window.alert("Good job! Press ok and continue to the next question.");
    } else {
      window.alert("Please enter a valid answer.");
      thrd();
    }
  }

  thrd();

  function frth() {
    //ask whether or not to include at least one numeric
    var userChoice4 = window.prompt("Do you want your password to have at least one numeric character? Enter Y for yes, N for No.").toUpperCase();
    console.log(userChoice4);
    //check if the user's answer is valid
    if (userChoice4 === "Y") {
      window.alert("Good job! Press ok and continue to the next question.");
      wantnum++;
    } else if (userChoice4 === "N") {
      window.alert("Good job! Press ok and continue to the next question.");
    } else {
      window.alert("Please enter a valid answer.");
      frth();
    }
  }

  frth();

  function ffth() {
    //ask whether or not to include at least one special characters
    var userChoice5 = window.prompt("Do you want your password to have at least one special character? Enter Y for yes, N for No.").toUpperCase();
    console.log(userChoice5);
    //check if the user's answer is valid
    if (userChoice5 === "Y") {
      window.alert("Good job! Press ok and continue to the next question.");
      wantspc++;
    } else if (userChoice5 === "N") {
      window.alert("Good job! Press ok and continue to the next question.");
    } else {
      window.alert("Please enter a valid answer.");
      ffth();
    }
  }

  ffth();
  
  //make a random numeric
  var rdmnum = numeric[Math.floor(Math.random() * numeric.length)];

  //make a random lwrcs
  var rdmlc = lowercase[Math.floor(Math.random() * lowercase.length)];

  //make a random uprcs
  var rdmuc = lowercase[Math.floor(Math.random() * lowercase.length)].toUpperCase();

  //make a random special chara
  var rdmspc = SpcChara[Math.floor(Math.random() * SpcChara.length)];

  //starting generate the password
  //TODO if else

  //adding characters to the password, generate password characters "length-1" times from random categories
  for (var i = 0; i < userChoice1; i++) {
      
  }
  //check if all criterias are met
  //insert new random characters and delete old characters until the criteria is met
  //run functions and display the password
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


