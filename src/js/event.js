function isChar(symbol) {
  return /[a-zA-Z]/.test(symbol);
}

function checkRegister(a, b) {
  return a === a.toUpperCase() ? 'U' : 'L';
}

function sameCase(a, b) {
  if (!isChar(a) || !isChar(b)) return -1;

  return checkRegister(a) === checkRegister(b) ? 1 : 0;
}

console.log(sameCase('C', 'B')); // 1
console.log(sameCase('b', 'a')); // 1
console.log(sameCase('d', 'd')); // 1
console.log(sameCase('A', 's')); // 0
console.log(sameCase('c', 'B')); // 0
console.log(sameCase('b', 'Z')); // 0
console.log(sameCase('\t', 'Z')); // -1
console.log(sameCase('H', ':')); // -1
