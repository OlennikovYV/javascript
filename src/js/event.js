function multiply(number) {
  const unsignedNumber = Math.abs(number);
  const countDigit = String(unsignedNumber).length;

  return number * Math.pow(5, countDigit);
}

console.log(multiply(10)); // 250
console.log(multiply(5)); // 25
console.log(multiply(200)); // 25000
console.log(multiply(0)); // 0
console.log(multiply(-2)); // -10
