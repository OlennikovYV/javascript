function generateIntegers(m, n) {
  return Array.from({ length: n - m + 1 }, (_, i) => i + m);
}

console.log(generateIntegers(2, 5)); // [2, 3, 4, 5]
