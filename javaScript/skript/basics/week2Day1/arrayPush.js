/** Push **/
/*
   handling arrays is a very important part in JavaScript
   we need to be able to add items or to remove items from an array
*/

let shoppingList= [
  'bananas',
  'apples',
  'pears',
  'oranges',
  'pork',
  'chicken'
];

const additionalItem = 'lettuce';
shoppingList.push(additionalItem);
console.log(shoppingList);

/*
   there are a few items we wish to add to this array
*/

const additionalItems = [
  'sauce',
  'water'
];

/*
   if we try to push an array in an array, the whole array will be inserted and not the values as separate value
   we can loop through the second array and push each item individually
*/
for (let i = 0; i < additionalItems.length; i++){
  shoppingList.push(additionalItems[i]);
}
console.log(shoppingList);

/** Unshift **/
/*
   unshift() adds to the beginning of an array, returning length
*/
shoppingList.unshift({color: 'red'});
console.log(shoppingList);