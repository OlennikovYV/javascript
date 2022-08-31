function calculate(str) {
  let result = '';

  result = str
    .split('plus')
    .join(' ')
    .split('minus')
    .join(' -')
    .split(' ')
    .reduce((sum, num) => Number(sum) + Number(num));

  return String(result);
}

console.log(calculate('1plus2plus3plus4')); // '10'
console.log(calculate('1minus2minus3minus4')); // '-8'
console.log(calculate('1plus2plus3minus4')); // '2'
console.log(calculate('245minus868minus545')); // '-1168'
