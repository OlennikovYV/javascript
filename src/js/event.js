function calculate(str) {
  let result;
  const operations = str.match(/plus|minus/g);
  const numbers = str.match(/\d+/g);

  result = numbers.reduce((sum, num, i) => {
    if (operations[i - 1] === 'plus') {
      sum = Number(sum) + Number(num);
    } else {
      sum = Number(sum) - Number(num);
    }

    return sum;
  });

  return String(result);
}

console.log(calculate('1plus2plus3plus4')); // '10'
console.log(calculate('1minus2minus3minus4')); // '-8'
console.log(calculate('1plus2plus3minus4')); // '2'
console.log(calculate('245minus868minus545')); // '-1168'
