function pattern(n) {
  let pattern = n % 2 === 0 ? n : n - 1;
  let output = '';

  if (n <= 1) return output;

  for (let i = 2; i <= pattern; i = i + 2) {
    const endLine = i !== pattern ? '\n' : '';

    output = output + String(i).repeat(i) + endLine;
  }

  return output;
}

console.log(pattern(2)); // '22'
console.log(pattern(1)); // ''
console.log(pattern(5)); // '22\n4444'
console.log(pattern(0)); // ''
console.log(pattern(-25)); // ''
