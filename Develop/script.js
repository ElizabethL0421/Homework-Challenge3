// Assignment code here

function generatePassword() {
  
  //use 1 to present yes, and 0 to present no
  var wantnum = 0;
  var wantlwr = 0;
  var wantupr = 0;
  var wantspc = 0;

  var len = 0;

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }

  function containsNumber(str) {
    return /\d/.test(str);
  }

  function containsSpcChara(str) {
    const regex = /[!@#$%^&*()<>?/:{}=+-_~`]/; 
    return regex.test(str);
  }

  var password = [];

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
      for (var i = 0; i < parseInt(userChoice1); i++) {
        len++;
      }
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

  //starting generate the password
  //TODO if else
  if (wantnum === 1 && wantlwr === 1 && wantupr === 1 && wantspc === 1) {
    
    // program to generate random strings

    // declare all characters
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 1 && wantupr === 1 && wantspc === 1) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
      
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 0 && wantupr === 1 && wantspc === 1) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 1 && wantupr === 0 && wantspc === 1) {
    const characters ='abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 1 && wantupr === 1 && wantspc === 0) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 0 && wantupr === 1 && wantspc === 1) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 0 && wantupr === 0 && wantspc === 1) {
    const characters ='0123456789!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 1 && wantupr === 0 && wantspc === 0) {
    const characters ='abcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 1 && wantupr === 0 && wantspc === 1) {
    const characters ='abcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 0 && wantupr === 1 && wantspc === 0) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 1 && wantupr === 1 && wantspc === 0) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 1 && wantlwr === 0 && wantupr === 0 && wantspc === 0) {
    const characters ='0123456789';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 1 && wantupr === 0 && wantspc === 0) {
    const characters ='abcdefghijklmnopqrstuvwxyz';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 0 && wantupr === 1 && wantspc === 0) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else if (wantnum === 0 && wantlwr === 0 && wantupr === 0 && wantspc === 1) {
    const characters ='!@#$%^&*()<>?/:{}=+-_~`';

    function generateString(length) {
      let password = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return password;
    }
    window.alert("now you have: " + (generateString(len)));
  } else {
    window.alert("Please select at least one charater type for your password. Press the generate button to try again!" )
  }
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

