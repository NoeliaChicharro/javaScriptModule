/** Loops **/

/* Just a small introduction to loops */
let counter = 10;

/** For Loop **/
/* A for loop iterate as long as a condition is true
   Syntax:

   for (starting point of your iterator;
        condition that needs to be true in order of the continue;
        what you add to your iterator after a successful loop) {
          code to execute every loop.
          the cool part about a for loop is, that we can use the iterator value.
          which will be different every repetition.
          }
*/

for (let i = 0; i < 10; i++){
  counter++;
  console.log(counter);
}

const array = ['apple', 'banana', 'pear'];
for (let j = 0; j < 3; j++){
  console.log(array[j]);
}

const cars = ['BMW', 'Audi', 'Volkswagen', 'Ford', 'Fiat'];
for (let n = 0; n < cars.length; n++){
  if (cars[n] === 'BMW'){
    console.log('There is a BMW in the list');
  }
}