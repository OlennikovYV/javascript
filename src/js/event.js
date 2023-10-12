function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((x, y) => x - y);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])); // [2, 4, 6, 8]
