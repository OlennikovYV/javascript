function beggars(values, n) {
  let result = Array(n).fill(0);
  let index = 1;

  if (n === 0) return [];

  for (let i = 0; i < values.length; i += 1) {
    result[index - 1] += values[i];

    index += 1;
    if (index > n) index = 1;
  }

  return result;
}

console.log(beggars([1, 2, 3, 4, 5], 1)); // [15]
console.log(beggars([1, 2, 3, 4, 5], 2)); // [9, 6]
console.log(beggars([1, 2, 3, 4, 5], 3)); // [5, 7, 3]
console.log(beggars([1, 2, 3, 4, 5], 6)); // [1, 2, 3, 4, 5, 0]
console.log(beggars([1, 2, 3, 4, 5], 0)); // []
