/** Console **/

console.log('I am logging this sting in the console');

/*
   console groups help us keep our logs organised!
*/
console.group('Fruits');
console.log('apple');
console.log('pear');
console.log('banana');
console.log('orange');
console.groupEnd();

console.group('Numbers');
console.log(1);
console.log(2);
console.log(34);
console.log(55);
console.groupEnd();

/*
   we can also create a group in a group
*/
console.group('Students');
console.group('WDD017');
console.log('Andreas');
console.log('Daniel');
console.log('Marc');
console.groupEnd();
console.group('WDD918');
console.log('David');
console.log('David');
console.log('Daniel');
console.groupEnd();
console.groupEnd();

/** Errors **/
console.error('this is used for logging errors to the console');

/** Information **/
console.info('this is used for logging information to the console');

/** Warnings **/
console.warn('this is used to create warnings');

/** Tables **/
/*
   tables work very well for arrays
*/
const array = ['Beans', 'Rice', 'Corn'];
console.table(array);

/*
   tables also work with objects
*/
const obj = {
  cost: 'chf 22',
  weight: '6 kg',
  availability: '10 Units'
};
console.table(obj);

/*
   you can also have multiple columns
*/
const names = [['Jane', 'Doe'], ['John', 'Smith'], ['James', 'Bond']];
console.table(names[0], names[1]);

/** Timers **/
let x = 0;
console.time();
for (let i = 0; i < 1000; i++){
  x = i;
}
console.timeEnd();

/** Stack trace **/
function first(){
  return second()
}

function second(){
  return third()
}

function third(){
  return fourth()
}

function fourth(){
  console.trace()
}

first()
















