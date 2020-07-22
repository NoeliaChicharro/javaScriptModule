// var student = {};

 var student = {
  name: 'Noelia',
   age: 23,
   eyeColor: 'green'
 }

// if a function is in an object, it is a method
var student2 = {
  name: 'Pasqualle',
  age: 26,
  eyeColor: 'brown',
  message: function () {
    alert('Hello my name is ' + this.name + ', I\'m ' + this.age + ' years old and my eyes are ' + this.eyeColor);
  }
}

student2.message();

// use assignment operator to overwrite the value of a key
student2.eyeColor = 'blue';
console.log(student2);



