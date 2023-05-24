function ArithmeticSequenceSum(a, r, n) {
  return Array.from({ length: n }, (_, i) => a + i * r).reduce(
    (sum, num) => sum + num
  );
}

console.log(ArithmeticSequenceSum(3, 2, 20)); // 440
console.log(ArithmeticSequenceSum(2, 2, 10)); // 110
console.log(ArithmeticSequenceSum(1, -2, 10)); // -80
