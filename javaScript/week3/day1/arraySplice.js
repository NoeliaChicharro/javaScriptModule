// splice
// this method helps to add values to a specific index of an array
var months = [
    'jan',
    'mar',
    'april',
    'june'
];

// this will overwrite everything between index 1 and 3 with 'feb'
months.splice(1, 3, 'feb');
console.log(months);

// as there is no index 4, the splice method will but the new value at the end of the array.
// the second number shows how many positions it should use.
months.splice(4, 1, 'may');
console.log(months);

