/** Splice **/
/*
   the splice() method changes the contents of an array
   by removing or replacing existing elements and/or adding new elements
*/
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 3, 'Feb');
// inserts at 1st index possition
console.log(months);

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);