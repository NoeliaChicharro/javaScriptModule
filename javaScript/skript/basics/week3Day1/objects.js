/** JavaScript Objects **/
/*
   To define an object we use the {} brackets
*/
const studentObj = {};

/*
   let's make a complete object
   this object has multiple names(keys) which all have values
*/

let student = {
  // the name name has the value 'Noelia'
  name: 'Noelia',
  // the name age has the value 23 and so on...
  age: 23,
  eyeColor: 'green'
  // a name and a value are known as a name value pair.
  // these are also refered to as properties
};

/*
   you can call a property value using the [] bracket or the . dot notation
*/
console.log(student['name']);
console.log(student.name);

let student = {
  // name: ['Noelia', 'Chicharro'],
  name: {
    firstName: 'Noelia',
    lastName: 'Chicharro'
  },
  age: 23,
  eyeColor: 'green',
  message: function () {
    alert('Hello my name is ' + this.name.firstName + ' and I am ' + this.age + ' years old!');
  }
};

/*
   to set a new value to an object, you ned to access it's name
*/
student.eyeColor = 'pink';











