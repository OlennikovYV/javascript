function cake(x, y) {
  const weightCandles = str =>
    [...str].reduce((sum, alpha, i) => {
      if (i % 2 !== 0) {
        sum += alpha.codePointAt(0) - 96;
      } else {
        sum += alpha.codePointAt(0);
      }
      return sum;
    }, 0);

  return weightCandles(y) / (x / 100) > 70 ? 'Fire!' : 'That was close!';
}

console.log(cake(900, 'abcdef')); // 'That was close!'
console.log(cake(56, 'ifkhchlhfd')); // 'Fire!'
console.log(cake(256, 'aaaaaddddr')); // 'Fire!'
console.log(cake(591, 'mufb')); // 'That was close!'
