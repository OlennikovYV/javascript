function nextItem(xs, item) {
  let iterator = xs[Symbol.iterator]();

  while (true) {
    let res = iterator.next();
    if (res.done) break;
    if (res.value === item) return iterator.next().value;
  }

  return undefined;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 6
console.log(nextItem(['a', 'b', 'c'], 'd')); // undefined
console.log(nextItem(['a', 'b', 'c'], 'c')); // undefined
console.log(nextItem('testing', 't')); // 'e'

function* countFrom(n) {
  for (let i = n; ; ++i) yield i;
}

console.log(nextItem(countFrom(1), 12)); // 13
