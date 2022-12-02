function pyramid(n) {
  return Array(n)
    .fill()
    .map((e, i) => Array(i + 1).fill(1));
}

console.log(pyramid(0)); // []
console.log(pyramid(1)); // [[1]]
console.log(pyramid(2)); // [[1], [1, 1]]
console.log(pyramid(3)); // [[1], [1, 1], [1, 1, 1]]
