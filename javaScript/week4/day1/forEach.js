// simple way of making loops
const students = [
  'Vedat',
  'Rothi',
  'Vera',
  'Martina',
  'Pasquale'
];

for (let i = 0; i < students.length; i++){
  console.log(students[i]);
}

console.log('\t');

// make the same thing with a for each loop
// for each is a higher order function
students.forEach(function(student) {
  console.log(student);
});

console.log('\t');

// for in
// get the key's of an object, to get the values variable[iterator]
const objt = {
  foo : 'one',
  bar: 'two',
  baz: 'three'
};

const arr = [3, 5, 7];

/*
for (let i in objt){
  console.log(i); // logs foo, bar , baz
}*/

for (let i of arr){
  console.log(i); // logs 3, 5 , 7
}
