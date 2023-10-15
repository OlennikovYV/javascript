function getSumOfDigits(integer) {
  let sum = 0;
  const digits = Math.floor(integer).toString();

  for (let ix = 0; ix < digits.length; ix += 1) {
    sum += +digits[ix];
  }

  return sum;
}

console.log(getSumOfDigits(123)); // 6
console.log(getSumOfDigits(223)); // 7
console.log(getSumOfDigits(0)); // 0
