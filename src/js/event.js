function pattern(n) {
  let output = [];

  for (let i = 2; i <= n; i = i + 2) {
    output.push(String(i).repeat(i));
  }

  return output.join('\n');
}

console.log(pattern(2)); // '22'
console.log(pattern(1)); // ''
console.log(pattern(5)); // '22\n4444'
console.log(pattern(0)); // ''
console.log(pattern(-25)); // ''
