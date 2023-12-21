function toBinary(n) {
  return (n >>> 0).toString(2);
}

console.log(toBinary(2)); // '10'
console.log(toBinary(3)); // '11'
console.log(toBinary(-3)); // '11111111111111111111111111111101'
console.log(toBinary(4)); // '100'
console.log(toBinary(5)); // '101'
