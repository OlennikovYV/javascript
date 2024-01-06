function pattern(n) {
  let output = [];

  for (let i = 0; i < n; i++) {
    const string = Array.from({ length: n - i }, (_, index) => n - index)
      .join``;

    output.push(string);
  }

  return output.join('\n');
}

console.log(pattern(1)); // '1'
console.log(pattern(2)); // '21\n2'
console.log(pattern(5)); // '54321\n5432\n543\n54\n5'
