// example array

var shoppingList = [
  'apples',
  'bananas',
  'pears',
  'oranges',
  'pork',
  'chicken'
];

// push
var additionalItem = 'lettuce';
shoppingList.push(additionalItem);
// it don't has to be a variable, u can push single strings, numbers, objects.

var moreItems = [
  'mango',
  'ice cream'
];

for (let i = 0; i < moreItems.length; i++){
  shoppingList.push(moreItems[i]);
}

// unshift()
// this will add the item at first place. It works similar to push, with the position difference.
var shifted = shoppingList.unshift('berries');

console.log(shoppingList);

