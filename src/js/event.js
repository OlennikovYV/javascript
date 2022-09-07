function sevenAte9(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] === '7' && str[i + 1] === '7') {
      if (str[i] !== '9') result += str[i];
    } else {
      result += str[i];
    }
  }

  return result;
}

const tests = [
  ['797', '77'],
  ['7979797', '7777'],
  ['165561786121789797', '16556178612178977'],
];

for (const [input, expected] of tests) {
  console.log([sevenAte9(input), expected]);
}
