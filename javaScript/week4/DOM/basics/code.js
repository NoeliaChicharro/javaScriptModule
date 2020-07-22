// innerHtml of an element
const title = document.querySelector('h1');
title.innerHTML = 'This is the new Title';

// if u know, that u gonna use it just once do not declare a separate variable
// using innerHtml u can add 'normal' HTMl
document.querySelector('h1').innerHTML = 'The Third Title';


// Creating new elements with JS
// at this point the 'div' isn't in the page.. just in the variable
const newElement = document.createElement('div');
newElement.innerHTML = 'This is a div';
// to really add it to the document use the appendChild() method (works like push())
// this will add the new element as child of the selected element
document.querySelector('p').appendChild(newElement);


// Setting Attributes
document.querySelector('li').setAttribute('id', 'first');
document.querySelector('ul').setAttribute('style', 'color: hotpink');









