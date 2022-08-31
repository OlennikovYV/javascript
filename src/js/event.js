function calculate(str) {
  let result = eval(str.split('plus').join('+').split('minus').join('-'));

  return String(result);
}

console.log(calculate('1plus2plus3plus4')); // '10'
console.log(calculate('1minus2minus3minus4')); // '-8'
console.log(calculate('1plus2plus3minus4')); // '2'
console.log(calculate('245minus868minus545')); // '-1168'
