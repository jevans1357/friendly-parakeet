window.alert("Let's make a password!")

// password length between 8-128 characters

var passwordLength = function() {
  password = window.prompt("How many characters would you like? Select between 8 and 128.")
  if(password >= 8 && password <= 128) {
      console.log(password)
    }
  else{
    window.alert("You didn't make a valid entry.")
    passwordLength()
  }
  return password
}


// character types - lowercase, uppercase, numberic, and/or special characters


var getCharacters = function() {
  var charset = ""

  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
  if(window.confirm("Do you want lowercase letters included?")) {
    
    charset += lowercaseLetters
  }
  
  if(window.confirm("Do you want uppercase letters included?")) {
    charset += uppercaseLetters
  }
  if(window.confirm("Do you want numbers included?")) {
    charset += numbers
  }
 if(window.confirm("Do you want special characters included?")) {
    charset += specialCharacters
  }
  //if nothing is selected
  if(charset == "") {
    window.alert("No characters selected. Please try again.")
    getCharacters()
  }
  return charset
}

// create password upon completion of all prompts

// display password in an alert or written to the page


function generatePassword() {
  var length = passwordLength()
  var charset = getCharacters()
  var retVal = ""
  console.log(length)
  console.log(charset)

  for (var i = 0; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * i));
  }
  console.log(retVal)
  return retVal
}

//window.alert(generatePassword())

document.getElementById("generate").addEventListener("click" , function(){
  document.getElementById("password").innerText=generatePassword()
}) 