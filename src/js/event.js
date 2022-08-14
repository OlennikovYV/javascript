function generateIntegers(m, n) {
  return Array(n - m + 1)
    .fill()
    .map(_ => m++);
}

console.log(generateIntegers(2, 5)); // [2, 3, 4, 5]
