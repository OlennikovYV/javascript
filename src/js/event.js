function howManyDalmatians(number) {
  let dogs = [
    'Hardly any',
    'More than a handful!',
    "Woah that's a lot of dogs!",
    '101 DALMATIANS!!!',
  ];

  switch (true) {
    case number <= 10:
      return dogs[0];
    case number <= 50:
      return dogs[1];
    case number <= 100:
      return dogs[2];
    case number === 101:
      return dogs[3];
    default:
      return ``;
  }
}

console.log(howManyDalmatians(26)); // 'More than a handful!'
console.log(howManyDalmatians(8)); // 'Hardly any'
console.log(howManyDalmatians(14)); // 'More than a handful!'
console.log(howManyDalmatians(80)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(100)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(101)); // '101 DALMATIANS!!!'
