function sequence(n, pattern) {
  return Array.from(
    { length: n },
    typeof pattern == 'function' ? pattern : _ => pattern
  );
}

console.log(sequence(3, 4)); // [4, 4, 4]
console.log(sequence(3, 's')); // ['s', 's', 's']
console.log(sequence(5, [])); // [[], [], [], [], []]
console.log(sequence(5, (x, idx) => idx % 2)); // [0, 1, 0, 1, 0]
