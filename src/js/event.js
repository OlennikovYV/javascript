function validPhoneNumber(phoneNumber) {
  return /^\([\d]{3}\) [\d]{3}\-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber('(123) 456-7890')); // true
console.log(validPhoneNumber('(1111)555 2345')); // false
console.log(validPhoneNumber('(098) 123 4567')); // false

console.log(validPhoneNumber('(1111)555 2345')); // false
console.log(validPhoneNumber('(098) 123 4567')); // false
console.log(validPhoneNumber('(123)456-7890')); // false
console.log(validPhoneNumber('abc(123)456-7890')); // false
console.log(validPhoneNumber('(123)456-7890abc')); // false
console.log(validPhoneNumber('abc(123)456-7890abc')); // false
console.log(validPhoneNumber('abc(123) 456-7890')); // false
