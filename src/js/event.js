function isValid(idn) {
  return /^[a-z$_]{1}[\w]*$/gi.test(idn);
}

console.log(isValid('okay_ok1')); // true
console.log(isValid('$ok')); // true
console.log(isValid('___')); // true
console.log(isValid('str_STR')); // true
console.log(isValid('myIdentf')); // true

console.log(isValid('1ok0okay')); // false
console.log(isValid('!Ok')); // false
console.log(isValid('')); // false
console.log(isValid('str-str')); // false
console.log(isValid('no no')); // false
