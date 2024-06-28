const hasOneChar = s => /^(.)\1*$/.test(s);

console.log(hasOneChar('a')); // true
console.log(hasOneChar('aaaaa')); // true
console.log(hasOneChar('aaaab')); // false
console.log(hasOneChar('bbbbb')); // true
console.log(hasOneChar('bbabb')); // false
