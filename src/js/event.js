function howManyDalmatians(number) {
  const dogs = [
    'Hardly any',
    'More than a handful!',
    "Woah that's a lot of dogs!",
    '101 DALMATIANS!!!',
  ];

  const respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2];

  return respond;
}

console.log(howManyDalmatians(26)); // 'More than a handful!'
console.log(howManyDalmatians(8)); // 'Hardly any'
console.log(howManyDalmatians(14)); // 'More than a handful!'
console.log(howManyDalmatians(80)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(100)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(101)); // '101 DALMATIANS!!!'
