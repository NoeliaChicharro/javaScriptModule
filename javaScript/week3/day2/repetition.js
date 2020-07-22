// 1. Create a 'double' function which will take in a number (n) and return double it's value
let double = n => n * 2;
console.log(double(3));

console.log("\t");
// 2. Create a function that takes in a number (age) as an argument and returns a message that tells you that age in dog years!
//    (one human year = seven dog years)
let message = null;
let dogYears = function (age) {
  let dogAge = age * 7;
  return message = 'Your age would be ' + dogAge + ' if u were a dog.';
}

console.log(dogYears(3));

console.log("\t");
// 3. Create a function that will convert a value from celcius to fahrenheit and ANOTHER one that converts fahrenheit to celcius
function celToFar(c) {
  return (c * 9/5) + 32;
}
console.log(celToFar(3));

function FarToCel(f) {
  return (f - 32) * 5/9;
}
console.log(FarToCel(3));

console.log("\t");
// 4. Create a function that takes the length, width and height of a  cube and return it's volume
function cube(l, w, h) {
  let volume = (l * w) * h;
  return volume;
}

console.log(cube(3, 6, 7));

let volumen= (len, wid, hei) => (len * wid) * hei;
console.log(volumen(4, 6, 7));

console.log("\t");
// 5. !BONUS!  Create a function that will take in a sentence as argument and capitalize the first letter of all it's words
//    You want to use split() to split the sentence into individual words and save them in an array

function capitalazer(sentence) {
  let upper;
  let lower;

  lower = sentence.toLowerCase();
  upper = sentence[0].toUpperCase() + lower.slice(1);
  return upper;
}

console.log(capitalazer('Hello there!'));