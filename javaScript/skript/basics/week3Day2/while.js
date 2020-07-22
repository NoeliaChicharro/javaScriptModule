/** While **/
/*
   there are multiple forms of loops, we already know the for loop
   this is the while loops

   while loops will run as long as it's condition is true
   the basic syntax for a while loop looks like this:
*/
let condition = false;
while (condition){
  console.log('this log will not happen');
}

/*
   it is very easy to accidentally create an infinite loop using while
*/

let n = 0;
console.log('\'%cThe code in my while loop will run as long as n is less than 5\', \'color: green\'');
while (n < 5){
  console.log('This message will be logged to the console because n is: ' + n);
  n++
}

console.log('%cThe loop is finished because n is: ' + n, 'color: red')

let check = false
while( !check ){
  console.log('not checked')
  check = true;
}