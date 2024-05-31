function singleDigit(n) {
  const convert = number => number.toString(2).replace(/0/g, '').length;

  if (n < 10) return n;

  while (((n = convert(n)), n > 9)) {}

  return n;
}

console.log(singleDigit(5)); // 5
console.log(singleDigit(999)); // 8
console.log(singleDigit(1234444123)); // 1
console.log(singleDigit(443566)); // 2
console.log(singleDigit(565656565)); // 3
console.log(singleDigit(4868872)); // 8
console.log(singleDigit(234234235)); // 2
console.log(singleDigit(567448)); // 7
console.log(singleDigit(1000000000)); // 3
