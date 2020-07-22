/* U may use this loop in a slider. If there are more then one items/options, use this loop. */
/*
for (var i = 1; i <= 10; i++){
  console.log("Our counter is " + i);
}
*/

/*var myList = ['apples', 'pears', 'bananas', 'pineapples', 'melons'];

for (var i = 0; i < myList.length; i++){
  console.log(myList[i]);
}*/

var cars = ['Mercedes', 'BMW', 'Opel', 'Toyota', 'VW', 'Tesla'];

for (var j = 0; j < cars.length; j++){
  var x = j+1;
  if (cars[j] == 'BMW'){
    console.log("Hey there is a BMW listed! On postition: " + x)
  } else if (cars[j] == 'Opel'){
    console.log("Hey there is a Opel listed! On position: " + x)
  }
}