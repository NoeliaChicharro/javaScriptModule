/** Pop **/
/*
   handling arrays is a very important part in JavaScript
   we need to be able to add items or to remove items from an array
*/

let shoppingList = [
  'bananas',
  'apples',
  'pears',
  'oranges',
  'pork',
  'chicken'
];

/*
   we are vegetarians and there are certain items in our shoppingList, we do not want to eat
   to remove the last items in an array we use pop()
*/
const lastItem = shoppingList.pop();

/*
   pop() will remove and return the last item in an array
*/
console.log(shoppingList[shoppingList.length] -1);
console.log(lastItem);
console.log(shoppingList);

/** Shift **/
/*
   shift() removes the first value of an array, returning the value and changing it's length
*/
const result = shoppingList.shift();
console.log(result);