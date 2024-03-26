function validateEAN(eanCode) {
  const checkDigit = Number(eanCode.slice(-1));
  const code = eanCode.slice(0, -1);
  const sum = code.split('').reduce((sum, digit, index) => {
    sum += Number(digit) * (index % 2 === 0 ? 1 : 3);
    return sum;
  }, 0);
  let checkSum = 10 - (sum % 10);
  checkSum = checkSum === 10 ? 0 : checkSum;

  return checkDigit === checkSum;
}

console.log(validateEAN('4003301018398')); // true
console.log(validateEAN('9783815820865')); // true
console.log(validateEAN('9783815820864')); // false
console.log(validateEAN('9783827317100')); // true
