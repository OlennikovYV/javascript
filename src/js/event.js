function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}

console.log(padIt('a', 1)); // '*a'
console.log(padIt('a', 2)); // '*a*'
console.log(padIt('a', 3)); // '**a*'
console.log(padIt('a', 4)); // '**a**'
console.log(padIt('a', 5)); // '***a**'
console.log(padIt('zucpieh', 28)); // '**************zucpieh**************'
