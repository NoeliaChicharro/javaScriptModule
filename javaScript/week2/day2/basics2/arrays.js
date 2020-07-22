// arrays
// Lists, the datatype in the array does not matter.

var strings = ['apples', 'bananas', 'pears'];
var numbers = [10, 50, 30];
var booleans = [true, false, true];
var objects = [{
  color: 'red',
    age: 24
  },
  {
    color: 'blue',
    age: 26
  }
];

//to get 'blue'
console.log(objects[1].color);
console.log('\t');

var multiDimentional = [
  [1, 2, 3, 4, 5, 6],
  ['Luca', 'Reza', 'Marc'],
  [
    [1, 3,4],
    [3, 45, 9],
    [9, 10, 0, [
      'apples',
      'bananas',
      'pears'
    ]]
  ]
];

// to get 'apples'
console.log(multiDimentional[2][2][3][0]);


