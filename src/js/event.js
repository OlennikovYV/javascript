function cake(x, y) {
  const weightCandles = str =>
    [...str].reduce(
      (sum, alpha, i) => (sum += alpha.codePointAt(0) + (i % 2 ? -96 : 0)),
      0
    );

  return weightCandles(y) / (x / 100) > 70 ? 'Fire!' : 'That was close!';
}

console.log(cake(900, 'abcdef')); // 'That was close!'
console.log(cake(56, 'ifkhchlhfd')); // 'Fire!'
console.log(cake(256, 'aaaaaddddr')); // 'Fire!'
console.log(cake(591, 'mufb')); // 'That was close!'
