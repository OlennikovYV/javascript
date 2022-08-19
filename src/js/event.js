function padIt(str, n) {
  const countSymbol = Math.ceil(n / 2);
  const stringBegin = ''.padStart(countSymbol, '*');
  const stringEnd = ''.padStart(n - countSymbol, '*');

  return stringBegin + str + stringEnd;
}

console.log(padIt('a', 1)); // '*a'
console.log(padIt('a', 2)); // '*a*'
console.log(padIt('a', 3)); // '**a*'
console.log(padIt('a', 4)); // '**a**'
console.log(padIt('a', 5)); // '***a**'
