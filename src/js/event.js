function counterEffect(hitCount) {
  return hitCount
    .split('')
    .map(digit => Array.from({ length: Number(digit) + 1 }, (_, i) => i));
}

console.log(counterEffect('1250'));
// [[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]]
console.log(counterEffect('0050'));
// [[0], [0], [0, 1, 2, 3, 4, 5], [0]]
console.log(counterEffect('0000'));
// [[0], [0], [0], [0]]
