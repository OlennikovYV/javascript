function pattern(n) {
  let output = [];

  for (let i = 0; i <= n; i += 1) {
    if (i % 2 === 1) output.push(String(i).repeat(i));
  }

  return output.join('\n');
}

console.log(pattern(4)); // '1\n333'
console.log(pattern(1)); // '1'
console.log(pattern(5)); // '1\n333\n55555'
console.log(pattern(0)); // ''
console.log(pattern(-25)); // ''
