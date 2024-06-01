function testit(a, b) {
  return [...new Set(a)].concat([...new Set(b)]).sort((a, b) => a - b);
}

console.log(testit([0], [1])); // [0, 1]
console.log(testit([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(testit([1], [2, 3, 4])); // [1, 2, 3, 4]
console.log(testit([1, 2, 3], [4])); // [1, 2, 3, 4]
console.log(testit([1, 2], [1, 2])); // [1, 1, 2, 2]
