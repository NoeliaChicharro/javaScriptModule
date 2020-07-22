/** Do while **/
/*
   the main difference between the do..while and the while loop is
   that the do while loop executes before the condition is checked

   main syntax:
*/

let condition = false;
do {
  // do something
} while (condition);

/*
   remember to always have a way to get out of the loop
    lets do some logs to understand what is happening
*/

let n = 0;
console.log('our variable n starts: ' + n);
do {
  console.log('we are in the do statement -> our variable n is: ' + n);
  n++;
} while (n < 5);
console.log('our loop is finished -> our variable n is: ' + n);