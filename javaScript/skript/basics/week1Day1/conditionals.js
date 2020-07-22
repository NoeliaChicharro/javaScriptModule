/** Conditionals **/

// Let's predefine some variables
const a = 10;
const b = 15;
const c = 20;

/** If Statement **/
// Is basically code that will execute if a condition is true.
/* Syntax:

 if (condition that has to be true ){
 code that I want to execute if the condition is true
 }
*/
if (a < b){
  console.log('a is smaller than b');
}

if (a < b && b < c){
  console.log('a is smaller than b AND b is smaller than c');
}

if (a < b || b > c){
  console.log('either b is larger than c OR a is smaller than b');
}

/** If ... else **/
/* The IF part of the statement will execute if the condition is true, just as before.
  The else part of the statement will execute if the condition is false.
  Syntax:

 if (condition){
 code that executes if the condition is TRUE
 } else {
 code that executes if the condition is FALSE
 }
 */
if (b < a){
  console.log(' b is smaller than a');
} else if (c < a){
  console.log('c is smaller than a');
} else {
  console.log('b and c are larger than a');
}

/** If inside If **/
/* You can nest conditionals inside conditionals (this is actually very common) */
if (b > a){
  console.log('b is smaller than a');
  if (a != 10){
    console.log('a is not 10');
  } else {
    console.log('else');
  }
} else if (c > a){
  console.log('c is smaller than a');
  if (a != 10) {
    console.log('a is not 10');
  }
} else {
  console.log('b and c are larger than a');
}










