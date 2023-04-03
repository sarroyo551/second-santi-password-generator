// Assignment code here
function generatePassword() {
    /*ask the user for the the desired length and verify that the answer is valid*/
    var possibleChars = '';
    var length = Number(prompt(`How long do you want your password to be?
  Your password must be between 8 characters and 128 characters`));
  
    // console.log(length, typeof length)
    if (!length) {
      alert('Must enter a number between 8 and 128')
      return
    }
  
    if (length > 128 || length < 8) {
      alert('Not a valid length')
      return
    } 
  
    var lowerCase = prompt(`Does your password have lower case characters?
    yes/no`)
  
    if (lowerCase !== 'yes' && lowerCase !== 'no') {
      alert('Not a valid response')
      return
    }
  
    var upperCase = prompt(`Does your password have upper case characters
    yes/no`)
  
    if (upperCase !== 'yes' && upperCase !== 'no') {
      alert('Not a valid response')
      return
    }
  
    var numeric = prompt(`Does your password have numbers?
    yes/no`)
  
    if (numeric !== 'yes' && numeric !== 'no') {
      alert('Not a valid response')
      return
    }
  
    var special = prompt(`Does your password have special characters?
    yes/no`)
  
    if (special !== 'yes' && special !== 'no') {
      alert('Not a valid response')
      return
    }
  
    if (lowerCase == 'no' && upperCase == 'no' && numeric == 'no' && special == 'no') {
      alert('You must choose at least one character type')
      return
    }
  
    if (lowerCase == 'yes') {
      possibleChars = possibleChars + 'abcdefghijklmnopqrstuvwxwz'
      //possibleChar += 'abcdefghijklmnopqrstuvwxwz' <same same
      //<lowercase alphabet... after all . console log 
    }
    console.log('possibleChars', possibleChars)
  
    if (upperCase == 'yes') {
      possibleChars = possibleChars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    console.log('possibleChars', possibleChars)
  
    if (numeric == 'yes') {
      possibleChars = possibleChars + '1234567890'
    }
    console.log('possibleChars', possibleChars)
  
    if (special == 'yes') {
      possibleChars = possibleChars + `!"#$%&'()*+,-./:;<=>?@[]/^_{}|~\``
    }
    console.log('possibleChars', possibleChars)
  
    let passwordResults = '';
  
    for (let i = 0; i < length; i++) {
      //generate a random number through math.floor(math.random * length?)
      let randomIndex = generateRandom(possibleChars.length);  
      let randomChar = possibleChars[randomIndex];
      passwordResults = passwordResults + randomChar; 
      //passwordResults += randomChar
      // console.log('password results', passwordResults)
    }
    return passwordResults;
  }
  
  function generateRandom (maxLimit) {
    return Math.floor(Math.random() * maxLimit)
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