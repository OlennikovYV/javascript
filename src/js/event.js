function numberToPower(number, power) {
  let pow = number;

  if (power === 0) return 1;
  for (let i = 1; i < power; i += 1) pow *= number;

  return pow;
}

console.log(numberToPower(4, 2)); // 16
console.log(numberToPower(10, 4)); // 10000
console.log(numberToPower(10, 0)); // 1
