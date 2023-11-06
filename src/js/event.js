function pattern(n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    output.push(String(i).repeat(i));
  }

  return output.join('\n');
}

console.log(pattern(1)); // '1'
console.log(pattern(2)); // '1\n22'
console.log(pattern(5)); // '1\n22\n333\n4444\n55555'
