function password(str) {
  const checkUpper = /[A-Z]/.test(str);
  const checkLower = /[a-z]/.test(str);
  const checkDigit = /[0-9]/.test(str);
  const checkLength = str.length >= 8;

  return checkUpper && checkLower && checkDigit && checkLength;
}

console.log(password('Abcd1234')); // true
console.log(password('Abcd123')); // false
console.log(password('abcd1234')); // false
console.log(password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890')); // true
console.log(password('ABCD1234')); // false
console.log(password('Ab1!@#$%^&*()-_+={}[]|:;?/>.<,')); // true
console.log(password('!@#$%^&*()-_+={}[]|:;?/>.<,')); // false
