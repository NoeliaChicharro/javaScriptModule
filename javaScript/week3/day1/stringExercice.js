/**
 * Fix this list
 * 
 * The names in this list should be all lowercase except for their first letter which
 * should be capitalized
 * Create a new array with the correct data
 */

let students = ['luCa', 'rEZa', 'ChiN', 'meliSSA', 'NoAH'];
let lower = [];
let upper = [];
 for (let i = 0; i < students.length; i++){
   let student = students[i].toLowerCase();
   upper = student[0].toUpperCase() + student.slice(1);
   lower.push(upper);
 }

 console.log(lower);

/**
 * The following data is corrupted
 * We know that the data we need is correct after the ;
 * Create a new array with the correct data
 */

let cities = ['MAN675847583748sjt567654;London',
'GNF576746573fhdg4737dh4;New York',
'LIV5hg65hd737456236dch46dg4;Madrid',
'SYB4f65hf75f736463;Cairo',
'HUD5767ghtyfyr4536dh45dg45dg3;Tokyo'];

let cut = [];
let correct = [];
for (let i = 0; i < cities.length; i++){
  let city = cities[i];
  cut = city.slice(city.indexOf(';') + 1, city.length);
  correct.push(cut);
}

console.log(correct);