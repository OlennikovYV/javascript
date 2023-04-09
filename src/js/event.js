function replaceAll(seq, find, replace) {
  return typeof seq == 'string'
    ? seq
        .split('')
        .map(el => (el == find ? replace : el))
        .join('')
    : seq.map(el => (el == find ? replace : el));
}

console.log(replaceAll([], 1, 2)); // []
console.log(replaceAll([1, 2, 2], 1, 2)); // [2, 2, 2]
console.log(replaceAll('World', 'o', 0)); // 'W0rld'
