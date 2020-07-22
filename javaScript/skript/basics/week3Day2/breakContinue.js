/** Break and continue **/
/*
   break statements do not only work within switch statements, they also terminate loops
*/

const students917 = [
  'Marc',
  'Daniel',
  'Andreas',
  'Sarah',
  'Diana'
];

for (let i = 0; i < students917.length; i++){
  if (students917[i] === 'Sarah'){
    break;
  }
  console.log(students917[i] + ' is a male student in a web class');
}

/*
   continue statement let you skip an iteration in a loop
*/
const students918 = [
  'Stephanie',
  'David',
  'Daniel',
  'Natanja',
  'Calvino',
  'Joel',
  'Simon',
  'Alban',
  'Nicole'
];

for (let i = 0; students918.length; i++){
  if (students918[i] == 'Alban' || students918[i] == 'Calvino' || students918[i] == 'Daniel'){
    continue;
  }
  console.log(students918[i] + ' is a student of WDD918');
}