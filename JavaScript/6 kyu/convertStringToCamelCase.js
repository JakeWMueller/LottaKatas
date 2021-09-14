// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  //split the string along - and _
  const words = str.split(/-|_/g);
  //the very first index will not be capitalized
  let camelCase = words[0];
  //iterate over the split string
  for (let i = 1; i < words.length; i++){
    //because it's split, each word is an index
    const word = words[i];
    //the first letter of the first word will go toUpperCase and be added onto camelCase, which already has a word in it
    //words[i].slice(1) returns the rest of the word apart from the first letter and also is added to camelCase
    camelCase += word[0].toUpperCase() + word.slice(1);
  }
  //return the camelCase string
  return camelCase;
}