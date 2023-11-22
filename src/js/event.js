function howManyDalmatians(number) {
  if (number <= 10) {
    return 'Hardly any';
  } else if (number <= 50) {
    return 'More than a handful!';
  } else if (number === 101) {
    return '101 DALMATIANS!!!';
  } else {
    return "Woah that's a lot of dogs!";
  }
}

console.log(howManyDalmatians(26)); // 'More than a handful!'
console.log(howManyDalmatians(8)); // 'Hardly any'
console.log(howManyDalmatians(14)); // 'More than a handful!'
console.log(howManyDalmatians(80)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(100)); // "Woah that's a lot of dogs!"
console.log(howManyDalmatians(101)); // '101 DALMATIANS!!!'
