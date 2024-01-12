function twistedSum(n) {
  let sum = 0;

  const sumDigits = number =>
    number
      .toFixed()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);

  for (let i = 1; i <= n; i++) {
    sum += sumDigits(i);
  }

  return sum;
}

console.log(twistedSum(3)); // 6
console.log(twistedSum(10)); // 46
console.log(twistedSum(11)); // 48
console.log(twistedSum(12)); // 51
