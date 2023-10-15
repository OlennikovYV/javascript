function getSumOfDigits(integer) {
  return Array.from(String(integer)).reduce(
    (sum, digit) => sum + Number(digit),
    0
  );
}

console.log(getSumOfDigits(123)); // 6
console.log(getSumOfDigits(223)); // 7
console.log(getSumOfDigits(0)); // 0
