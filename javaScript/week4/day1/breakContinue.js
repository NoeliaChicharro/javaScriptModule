const students = [
  'Vedat',
  'Rothi',
  'Vera',
  'Luca',
  'Martina',
  'Pasquale'
];

// use break to get out of the loop
for (let i = 0; i < students.length; i++){
  if (students[i] === 'Luca'){
    break;
  }
  console.log(students[i]);
}

console.log('\t');

const students2 = [
  'Vedat',
  'Rothi',
  'Vera',
  'Luca',
  'Martina',
  'Pasquale',
  'Anna',
  'Noelia'
];

// use continue to over step one iteration
for (let i = 0; i < students2.length; i++){
  if (students2[i] === 'Luca' || students2[i] === 'Anna'){
    continue;
  }
  console.log(students2[i]);
}
