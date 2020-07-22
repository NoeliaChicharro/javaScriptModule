/** Strings **/

/* To get one letter of a word, we need to know what it's index (position) is. */
const word = 'JavaScript';

/*
   Do this with this counter system:
   0 -> J
   1 -> a
   2 -> v
   3 -> a
   4 -> S
   5 -> c
   6 -> r
   7 -> i
   8 -> p
   9 -> t

   so if we want to get the first letter of the variable 'word' we need to select -> word[0]
   and in this case the last letter would be -> word[8]
*/

wordLength = word.length;

/*
   the length of a word is how many characters it has.
    in this case of our variable 'word', it's length 9.
*/

/** Exercise **/
/* the goal of this exercise is, to create code that will test if a word in an array starts
   with the letter a, b or c or ends with the letter x, y or z
*/
const array = ['Popcorn', 'Acorn', 'Lolzz', 'Ant', 'Fish'];

for (let i = 0; i < array.length; i++){
  let first =  array[i][0];
  let last = array[i][array[i].length - 1];
  if (first === 'A' || first === 'B' || first === 'B' ||
      last === 'X' || last === 'Y' || last === 'Z'){
    console.log(array[i]);
  }
}

/** String immutability **/
/*
   strings are immutable
   this basically means, that we CANNOT change single letters in a string
   so the following won't work:
*/
let w = 'JavaScript';
w[5] = 'X';
console.log(w);

/*
   we need to redefine the whole variable
*/
w = 'JavaSXript';
console.log(w);

/** Escaping **/
/*
   we can escape special characters that we want to be interpreted as text and not js code
   a common example is escaping quotes ""
*/
const string = 'And he said \'Hello!\'';

/*
   an alternative way would be to use different types of quotes, but this can get complicated
*/
const alternative = "And he said 'Hello!'";













