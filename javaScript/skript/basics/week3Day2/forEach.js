/** ForEach **/
/*
   in general it is just a simple and quick way to make loops
*/
let students = [
  'Stephanie',
  'David',
  'David',
  'David',
  'Natanja',
  'Julian',
  'Joel',
  'Simon',
  'Michael',
  'Nicole',
  'Cyril',
  'Renato',
  'Denny',
];

students.forEach(student =>{
  console.log('my name is ' + student);
});

/** More loops (for in/ for of) **/

const objt = {
  foo: 'one',
  bar: 'two',
  baz: 'three'
}
const arr = [3, 5, 7];

for (var i in objt) {
  console.log(i);
}

for (var i of arr) {
  console.log(i);
}