// does the machine have electricity?
var electricity = true;

// does the machine have ingredients?
var coffee = 80;
var water = 80;

var program = ['coffee', 'espresso', 'latter'];

// ask user if he wants to turn on the machine
var turnOn = confirm('Do u want to turn on the machine?');

// check input
if (turnOn){
  // machine is on
  if (electricity){
    // machine has electricity
    if (coffee < 20 && water < 20){
      alert('Time to refill the ingredients!');
    } else if (coffee > 1 || water > 1){
      var choise = prompt('What kind of coffee do u want? (coffee, espresso, latter)');
      if(choise === 'coffee'){
        alert('Your coffee will be done in a minute!');
      } else if (choise === 'espresso'){
        alert('Your espresso will be done in a minute!');
      } else if (choise === 'latte'){
        alert('Your latte will be done in a minute!');
      } else {
        choise = prompt('What kind of coffee do u want? choose one of these (coffee, espresso, latter)');
      }
    } else {
      alert('Refill the ingredients!');
    }
  } else {
    // !electricity, tell user
    alert('There is no electricity!');
  }

} else {
  // machine is of

}



