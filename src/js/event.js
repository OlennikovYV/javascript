function pattern(n) {
  let output = [];

  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 1; j <= n; j++) {
      const sum = i + j;

      if (sum <= n) {
        line += sum;
      } else {
        line += sum - n;
      }
    }
    output.push(line);
  }

  return output.join('\n');
}

console.log(pattern(7));
// '1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456'
console.log(pattern(1)); // '1'
console.log(pattern(4)); // '1234\n2341\n3412\n4123'
console.log(pattern(0)); // ''
console.log(pattern(-25)); // ''
