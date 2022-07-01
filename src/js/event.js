function sumCubes(n) {
  return Array.from(Array(n), (el, i) => (i + 1) ** 3).reduce(
    (sum, num) => sum + num
  );
}

console.log(sumCubes(1)); // 1
console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36
console.log(sumCubes(4)); // 100
console.log(sumCubes(10)); // 3025
console.log(sumCubes(123)); // 58155876
