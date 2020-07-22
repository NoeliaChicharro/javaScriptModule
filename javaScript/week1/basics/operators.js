// Assigment operator
var foo = "Bar";

// == / ===
if (foo === "Bar"){
  console.log(foo);
}

if (foo === "Bar"){
  console.log(foo);
}
console.log("\t");

// < , >, <=, >=
var x = 20;
var y = 60;

if (x < 60){
  console.log("x is less then y");
}
console.log("\t");

// Mathematical operators (+, -, /, *)
console.log(x+y);
console.log("\t");

// && (And), || (Or)
if (x === 20 && y === 60){
  console.log("The conditions were right!");
}

if (x === 90 || y === 60){
  console.log("One of the conditions were right!");
}
console.log("\t");

// NOT
var baz = true;
if (!baz){
  console.log('baz');
} else {
  console.log("failed!");
}
console.log("\t");

// ++, --
var num = 30;
num+=3;
x++;
y--;
console.log(x);
console.log(y);
console.log(num);
console.log("\t");

//Modulo %
console.log(5 % 2);
console.log("\t");

// mini challange
var array = ['i', 'z', 'p', 'o', 'l', 'o'];
for (var i=0; i < array.length; i++) {
  if (i % 2 != 0){
    console.log(array[i]);
  }
}












