/** Arrays **/
/*
   arrays are basically lists of values
   they can have strings:
*/
const strings = ['popcorn', 'cake', 'candy'];

/*
   they can also have booleans:
*/
const booleans = [true, true, false];

/*
   basically they can have any datatype you can think of, even objects:
*/
const array = [{color: 'red', age: 26}, {color: 'green', age: 90}];

/*
   you can also have arrays in arrays
   this is known as a multidimensional array
*/
const multidimensional = [
  [1, 2, 3, 4, 5,],
  ['Luca', 'Reza', 'Chin'],
  [
    [1, 2, 4],
    [3, 5, 6],
    [1, 2, 3],
    [1, 3,
      [
      'apples',
      'bananas',
      'pears'
      ]
    ]
  ]
];

/*
   we use the index of a value in an array to select it
   get cake from 'strings':
*/
console.log(strings[1]);

/*
   log first value of the multidimensionalArray: [1, 2, 3, 4, 5]:
*/
console.log(multidimensional[0]);

/*
   log the third value of the first value of the multidimensionalArray: 3:
*/
console.log(multidimensional[0][2]);

/*
   this can go on and on. log the deeper '5'
*/
console.log(multidimensional[2][1][1]);









