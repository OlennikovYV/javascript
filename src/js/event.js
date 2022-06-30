function getNumberFromString(s) {
  return +s
    .split('')
    .filter(el => /[0-9]/g.test(el))
    .join('');
}

console.log(getNumberFromString('1')); // 1
console.log(getNumberFromString('123')); // 123
console.log(getNumberFromString('this is number: 7')); // 7
