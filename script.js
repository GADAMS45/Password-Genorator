// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
var characterpool = []
var randompassword = []

function generatePassword(){
var pwlength = prompt("How long do you want your password to be?")
var numbers = confirm ("Would you like numbers in your password?")
var confirmlower = confirm ("Would you like lowercase letters?")
var confirmupper = confirm ("Would you like upper case letters?")
var confirmspecial= confirm ("Would you like special charecters?")


if (numbers === true) {
  characterpool = characterpool.concat(numericCharacters)
}

if (confirmspecial === true) {
  characterpool = characterpool.concat(specialCharacters)
}

if (confirmlower === true){
  characterpool = characterpool.concat(lowerCase)
}

if (confirmupper === true) {
  characterpool = characterpool.concat(upperCase)
}
console.log(characterpool)
for (var i = 0; i<pwlength; i++){
  var randomindex = Math.floor(Math.random() * characterpool.length)
  var indexvalue = characterpool[randomindex]
  randompassword.push(indexvalue)
  console.log(randompassword)
}


  // return string that will be random password
  return randompassword.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
