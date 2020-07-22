/** Functions **/
/*
   functions allow us to create reusable code in JavaScript
   the following, examples of functions

   this is a function declaration
   we called this function square and it takes in a number as a parameter
*/
function square(number) {
  /*
     when e call the function and give in a number it will crate a console.log
     with the number we provided multiplied be the number we provide
  */
  console.log(number * number);
}
/*
   to call the function in JavaScript we just write it0s name and use ()
   inside the () we put the expected parameter
*/
square(2);

/*
   this function we called 'lordify' which takes two parameters
   the first parameter is a name and the second parameter is a city
*/
let userName = prompt('Your Name');
let userCity = prompt('Your City');
function lordify(name, city) {
  // the function will concatenate the name and the city together with the word 'of'
  console.log(name + ' of ' + city);
}
lordify(userName, userCity);