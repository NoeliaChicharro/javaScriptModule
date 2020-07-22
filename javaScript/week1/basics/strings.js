// strings
var word = 'JavaScript';

/*
* 0 -> J
* 1 -> a
* 2 -> v
* 3 -> a
* 4 -> S
* 5 -> c
* 6 -> r
* 7 -> i
* 8 -> p
* 9 -> t
 */

var wordLength = word.length;
console.log(wordLength);

// first letter
console.log(word[0]);

// last letter
console.log(word[word.length -1]);
console.log('\t');

// loop through strings is also possible.

// ABC, XYZ Exercise
var array = ['Popcorn', 'Acorn', 'Lolzz', 'Ant', 'Fish'];
for (var i=0; i < array.length; i++){
  var firstLetter = array[i][0];
  var lastLetter = array[i][array.length-1] ;

  if (firstLetter === 'A' || firstLetter === 'B' || firstLetter === 'C' || lastLetter === 'x'|| lastLetter === 'y' || lastLetter === 'z'){
    console.log(array[i]);
  }
}
console.log('\t');

// String Immutability
var wordy = 'JavaScript';
wordy[5] = 'x';
console.log(wordy);
// -> u cannot change the Strig it's not mutable!! (single parts of) U have to change the whole string.

wordy = 'JavaSxript';
console.log(wordy);
console.log('\t');

// Escaping -> How to get special characters as string parts
var escape = 'And he said \'Hello!\'';
var escape = 'And he said "Hello!"';
console.log(escape);














