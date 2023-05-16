function pattern(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (sum, _, i, arr) => sum + (i ? '\n' : '') + arr.slice(i).join(''),
    ''
  );
}

console.log(pattern(0)); // ''
console.log(pattern(1)); // '1'
console.log(pattern(2)); // '12\n2'
console.log(pattern(5)); // '12345\n2345\n345\n45\n5'
