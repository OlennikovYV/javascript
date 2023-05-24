function ArithmeticSequenceSum(a, r, n) {
  return a * n + (r * n * (n - 1)) / 2;
}

console.log(ArithmeticSequenceSum(3, 2, 20)); // 440
console.log(ArithmeticSequenceSum(2, 2, 10)); // 110
console.log(ArithmeticSequenceSum(1, -2, 10)); // -80
