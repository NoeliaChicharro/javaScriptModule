var small = 30;
var other = '30';
var person  = {
  name: 'noelia',
  lastname: 'chicharro'
};

if (small == other) {
  console.log('small and other are exactly the same');
  if (person.name == 'noelia'){
    console.log('And the name is Noelia');
  } else {
    console.log('But the name is not Noelia');
  }
} else if (small > other) {
  console.log('small is grater than other');
} else {
  console.log('none of the above is right!');
}