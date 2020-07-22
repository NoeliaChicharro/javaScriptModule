/** 
 * 1: Organize the array 'disorder' into 3 separate variables: odds, evens and words
 **/ 
var disorder = [2, 'chicken', 4, 5, 15, 'apple', 100, 25, 'lettuce', 'beans', 90, 33, 21, 3, 'pears', 34, 21, 'orange', 'pork']

var odds = []; // 5, 15, 25, 33, 21, 3, 21
var evens = []; // 2, 4, 100, 34
var words = []; // 'chicken', 'apples', 'lettuce', 'beans', 'pears', 'orange', 'pork'

/**
 * 2: 'words' is the contents of a vegetarians fridge, she does not eat meat!
 * Get rid of all non-vegi items in the words array and throw them in the trash array
 **/ 

var trash = []


/**
 * 3: Show the contents of the arrays 'odds', 'evens', 'fridge', and 'trash'  
 * to the console
 */
 for(let i = 0; i < disorder.length; i++){
   if(isNaN(disorder[i])){
       // The iteration value was NOT a number 
       words.push(disorder[i]); 
   } else {
      // the iteration value WAS a number
      if(disorder[i] % 2 === 0){ 
          // the number WAS even
          evens.push(disorder[i]);
      } else {
          // the number is NOT even
          odds.push(disorder[i]);
      }
   }
 }

 trash.push(words.pop());
 trash.push(words.shift());

 console.log(words +'\t', evens +'\t', odds +'\t');
 console.log(trash);

 /* steps to succed! 
 1. iteration
 2. isNaN
 true = push() string
 false = 3. if even (% 2 === 0) else (% 2 !== 0)
 true = push() even number 
 false = push()  odd number 
 */



