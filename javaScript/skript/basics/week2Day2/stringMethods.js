/** String methods **/
/*
   we've already looked at the .length property as well as iterating
   through the different indexes of a string
   here are some other important methods we use with stings
*/

/** IndexOf() **/
/*
   indexOf() -> allows us to find a string in a string
   we call this substring
*/
const notice = 'Important!: Remember to pay your taxes';
console.log(notice.indexOf('Important!'));

/*
   if the word you are looking for is currently in the string, then you will get a number value
   between 0 and the length of the string, including the index
   otherwise, if the word is not in the string, you will get a -1
*/

const word = 'Important!';
if (notice.indexOf(word) < 0){
  // the word is not in the notice string
  console.log('The word you are looking for is not in the string');
} else {
  // the word is in the string
  console.log('The word is in the string');
}

/** Slice() **/
/*
   slice() -> let's use get a character or multiple characters using indices
   warning! slice() and splice() are not the same!
*/
console.log(notice.slice(11));
console.log(notice.slice(11, 20));

/** ToUpperCase()/ToLowerCase() **/
/*
   not much to say here, we can transform a string and make it's letters upper or lower case
*/
let sentence = 'thE qUiCk broWn fOx juMps Over tHE LAzy doG';
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

/*
   We do not have a capitalization method for strings
   However we can transform the first letter of a string to upper case and attach
   the rest of the string to it, and store it in a variable
*/

capt = sentence[0].toUpperCase() + sentence.slice(1);
console.log(capt);
// Outputs: The quick brown fox jumps over the lazy dog


/** Replace **/
/*
   replace looks for a substring in a string and changes it for another substring
   in this example we are replacing the substring 'devils' to the substring 'unicorns'
*/

let evil = 'We love devils';

/*
   the first parameter is the substring we wish to replace,
   the second parameter is the substring we want to replace the first parameter with!
*/

evil = evil.replace('devils','unicorns');

console.log(evil);
// Expected output is: 'We love unicorns'























