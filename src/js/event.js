function validPass(password) {
  return /^(?=.*[a-z])(?=.*\d)[a-z\d]{4,19}$/gi.test(password)
    ? 'VALID'
    : 'INVALID';
}

console.log(validPass('Username123')); // 'VALID'
console.log(validPass('Username')); // 'INVALID'
console.log(validPass('1Username')); // 'VALID'
console.log(validPass('123')); // 'INVALID'
console.log(validPass('a12')); // 'INVALID'
console.log(validPass('1234')); // 'INVALID'
console.log(validPass('a123')); // 'VALID'
console.log(validPass('Username123!')); // 'INVALID'
console.log(validPass('passw0rdIsntTooLong')); // 'VALID'
console.log(validPass('passw0rd1CharTooLong')); // 'INVALID'
