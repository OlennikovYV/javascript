function add(a, b) {
  return a == b;
}

console.log(add('1', 1)); // true
console.log(add(1, '1')); // true
console.log(add(1, '0')); // false
console.log(add('11', 11)); // true
console.log(add(12, 12)); // true
console.log(add(120, '021')); // false
