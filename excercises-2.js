// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
  if (x > y){
    return x;
  } else {
    return y;
  }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
// This could be written like this:
var maxOfThree = function (x, y, z){
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >=z)  {
    return y;
  } else {
  return z;
  }
};
// or like this:
var maxOfThree = function (x, y, z){
  if (x >= y && x >= z) {return x; }
  if (y >= x && y >=z)  {return y; }
  return z
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.
// ---------------------

var isVowel = function (char){
  var lowerChar = char.toLowerCase ();
  if (lowerChar === "a") {
    return true;
  } else if (lowerChar === "e") {
    return true;
  } else if (lowerChar === "i") {
    return true;
  } else if (lowerChar === "o") {
    return true;
  } else if (lowerChar === "u") {
    return true;
  } else {
    return false;
  }
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var translate = function (phrase) {
  var newPhrase = "";
  for (count = 0; count < phrase.length; count++){
    var letter = phrase[count];
    if (cleanerIsVowel(letter) || letter === " ") {
      newPhrase += letter;
    } else {
      newPhrase += letter + "o" + letter;
    }
  }
  return newPhrase;
};

// cleanerIsVowel is from a previous problem
// I DO NOT UNDERSTAND THIS PROBLEM


// ---------------------
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

var reverseAlt = function (string) {
  var newString = "";
  for (var count = string.length - 1; count >= 0; count--) {
    var letter = string[count];
    newString += letter;
  }
  return newString;
};

// I DO NOT UNDERSTAND THIS PROBLEM 
