function beggars(values, n) {
  let result = Array(n).fill(0);

  if (!n) return [];

  for (let i = 0; i < values.length; i += 1) result[i % n] += values[i];

  return result;
}

console.log(beggars([1, 2, 3, 4, 5], 1)); // [15]
console.log(beggars([1, 2, 3, 4, 5], 2)); // [9, 6]
console.log(beggars([1, 2, 3, 4, 5], 3)); // [5, 7, 3]
console.log(beggars([1, 2, 3, 4, 5], 6)); // [1, 2, 3, 4, 5, 0]
console.log(beggars([1, 2, 3, 4, 5], 0)); // []
