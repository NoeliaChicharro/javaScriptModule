/** Operators in JavaScript **/

/* There are many operators in JavaScript that help us control and manipulate variables
*  in different ways.
*  Here are the most important ones. */

/** Assigment operator (=) **/
// we use the operator to assign values to variables.
const num = 20;

/** Addition operator (+) **/
// This can be used to add two numbers or to concatenate two strings.
const str1 = 'Hello';
const str2 = 'World';
const separator = ' ';
console.log(str1 + separator + str2);

/** Substraction operator (-) **/
// This operator is used to substract a value form a number
const otherNum = 100;
console.log(otherNum - num);

/** Greater than (>), less than (<), and equal to (==) operators **/
/* Greater then tests if a value is greater than the other value.
*  If that is the case, it returns true, otherwise it returns false. */
if (otherNum > num){
  console.log('OtherNum is greater than num');
}

/* Less than tests if a value is less than another value.
*  If that is the case, it returns true, otherwise it returns false. */
if (num < otherNum){
  console.log('Num is less then OtherNum');
}

/* Equals test if a value is equal to another value.
*  If that is the case, it returns true, otherwise it returns false. */
if (num == num){
  console.log('Num is the same as num');
}

/* The equal value and equal type operator (===)
*  If the first value is a string, this operator checks if the second one is a string too.
*  If that is the case, it returns true, otherwise it returns false. */
const notaNum = '24';
if (num == notaNum){
  console.log('success');
}

if (num === notaNum){
  console.log('this will never execute');
}

/* Modulo operator (% division remainder)
* It divides a number by another number and returns the remainder.
* Example, when dividing a number by 2, if the remainder is not zero, the number is odd! */
console.log(7 % 2);
if (6 % 2 === 1){
  console.log('Modulo!');
}

/* Less than or equal to, Greater than and equal to (<= / >= )
* Combined the less/greater than operators with the equals operator. */
const bar = 10;
const bat = 9;
if(bar >= bat){
  console.log('Yoooohooo!');
}

/** Logical operators **/
/* NOT operator (!) */
const first = 1;
const second = 2;
console.log(first != second);
// Returns true, because first is not equal to second

/* AND operator (&&) */
console.log(first === 1 && second === 2);
// returns true, because first is 1 AND second is 2

/* OR operator (||) */
console.log(first === 1 || second === 1);
// returns true, because first is 1. Only one ot the expressions needs to be correct.















