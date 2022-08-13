function stringy(size) {
  return ''.padStart(size, '10');
}

console.log(stringy(1)); // '1'
console.log(stringy(2)); // '10'
console.log(stringy(4)); // '1010'
console.log(stringy(5)); // '10101'
console.log(stringy(6)); // '101010'
console.log(stringy(12)); // '101010101010'
