function numberToPower(number, power) {
  return power === 0 ? 1 : number * numberToPower(number, (power -= 1));
}

console.log(numberToPower(4, 2)); // 16
console.log(numberToPower(10, 4)); // 10000
console.log(numberToPower(10, 0)); // 1
