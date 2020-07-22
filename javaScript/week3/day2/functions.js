// function declarations
// u can call the function even if the declaration is located at the end of the file (js does hoisting)
function square(number) {
 // return  number * number;
  console.log(number * number);
}
 // function call
square(20);
console.log(square(30));


let userName = prompt('Tell me your name');
let userCity = prompt('Tell me a city');

function lordify(nameUser, cityUser) {
  alert(nameUser + ' of ' + cityUser);
}

lordify(userName, userCity);

// Arrow functions (since ECMA-Script 6)
// it is perfect to use if there is just one return statement
var double = num => num * 2;

// if there are more then one parameters u should in close them into bracets.
var squareus = (numX, numY) => numX * numY;

// multiple line statements
var example = word => {
  if (word != 'piranha'){
    console.log('do something');
  }
}

// function expressions
// but hoisting does not take place at these kind of functions
var greet = function (name) {
  console.log('Hello ' + name);
}

greet();





























