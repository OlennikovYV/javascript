function sevenAte9(str) {
  return str.replace(/79(?=7)/g, '7');
}

const tests = [
  ['797', '77'],
  ['7979797', '7777'],
  ['165561786121789797', '16556178612178977'],
];

for (const [input, expected] of tests) {
  console.log([sevenAte9(input), expected]);
}
