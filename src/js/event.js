function pattern(n) {
  let line = '';
  const array = [];

  for (let i = n; i > 0; i--) {
    line += i;
    array.push(line);
  }

  return array.join('\n');
}

console.log(pattern(1)); // '1'
console.log(pattern(2)); // '2\n21'
console.log(pattern(5)); // '5\n54\n543\n5432\n54321'
