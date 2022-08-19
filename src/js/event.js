function padIt(str, n) {
  let result = '';
  let currentIndex = 1;
  const halfString = Math.ceil(n / 2);

  while (result.length < n + str.length) {
    if (currentIndex === halfString + 1) {
      result += str;
    } else {
      result += '*';
    }
    currentIndex += 1;
  }

  return result;
}

console.log(padIt('a', 1)); // '*a'
console.log(padIt('a', 2)); // '*a*'
console.log(padIt('a', 3)); // '**a*'
console.log(padIt('a', 4)); // '**a**'
console.log(padIt('a', 5)); // '***a**'
console.log(padIt('zucpieh', 28)); // '**************zucpieh**************'
