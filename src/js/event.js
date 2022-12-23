const sumDigit = number =>
  [...number.toFixed(0)].reduce((sum, num) => sum + Number(num), 0);
const reverseDigit = number =>
  Number([...number.toFixed(0)].reverse().join(''));

function numberJoy(n) {
  const sum = sumDigit(n);

  return reverseDigit(sum) * sum === n;
}

console.log(numberJoy(1997)); // false
console.log(numberJoy(1998)); // false
console.log(numberJoy(1729)); // true
console.log(numberJoy(18)); // false
console.log(numberJoy(1)); // true
console.log(numberJoy(81)); // true
console.log(numberJoy(1458)); // true
