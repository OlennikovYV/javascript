function password(str) {
  return /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(str);
}

console.log(password('Abcd1234')); // true
console.log(password('Abcd123')); // false
console.log(password('abcd1234')); // false
console.log(password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890')); // true
console.log(password('ABCD1234')); // false
console.log(password('Ab1!@#$%^&*()-_+={}[]|:;?/>.<,')); // true
console.log(password('!@#$%^&*()-_+={}[]|:;?/>.<,')); // false
