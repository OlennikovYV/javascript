function nextItem(xs, item) {
  const iterations = xs[Symbol.iterator]();

  for (let el of iterations) if (el === item) return iterations.next().value;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 6
console.log(nextItem(['a', 'b', 'c'], 'd')); // undefined
console.log(nextItem(['a', 'b', 'c'], 'c')); // undefined
console.log(nextItem('testing', 't')); // 'e'

function* countFrom(n) {
  for (let i = n; ; ++i) yield i;
}

console.log(nextItem(countFrom(1), 12)); // 13
