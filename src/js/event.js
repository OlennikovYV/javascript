function validateEAN(eanCode) {
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += eanCode[i] * (i & 1 ? 3 : 1);
  }

  return (10 - (sum % 10)) % 10 === Number(eanCode[12]);
}

console.log(validateEAN('4003301018398')); // true
console.log(validateEAN('9783815820865')); // true
console.log(validateEAN('9783815820864')); // false
console.log(validateEAN('9783827317100')); // true
