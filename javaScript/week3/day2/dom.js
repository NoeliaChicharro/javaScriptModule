// Get elements by class name
// U HAVE TO select the document! (this counts for all variations)
var myTitle = document.getElementsByClassName('title');
console.log(myTitle);

// Get element by Id
var myParagraph = document.getElementById('message');
console.log(myParagraph);

// Get elements by tag name
var myList = document.getElementsByTagName('ul');
console.log(myList);

// Query selector
// use CSS selectors (but js will just select one. the first in flow)
var myFirstLi = document.querySelector('li');
console.log(myFirstLi);

// this will take all the elements with the corresponding tag
var myLis = document.querySelectorAll('li');
console.log(myLis);