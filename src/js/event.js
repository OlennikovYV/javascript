function pattern(n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    array.push(Array.from(Array(i), (_, index) => n - index).join(''));
  }

  return array.join('\n');
}

console.log(pattern(1)); // '1'
console.log(pattern(2)); // '2\n21'
console.log(pattern(5)); // '5\n54\n543\n5432\n54321'
