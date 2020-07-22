/** CLICK ME EVENT **/
// first of all get the button selected
const button = document.querySelector('button');

// Event listener
// Callback function with no arrow function
// Callback functions do not need parameters, cause actually they return a parameter
// Callback functions always return something.
let counter = 1;
button.addEventListener('click', function () {
  console.log('Button was clicked! ' + counter);
  counter++;
});


// Callback arrow function
/*button.addEventListener('click', () => {
  console.log('Button was clicked!');
});*/

// With declared function
/*button.addEventListener('click', doSomething);

function doSomething() {
  console.log('Button was clicked!');
}*/



