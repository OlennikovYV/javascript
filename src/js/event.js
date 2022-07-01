function sumCubes(n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum = sum + i ** 3;
  }

  return sum;
}

console.log(sumCubes(1)); // 1
console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36
console.log(sumCubes(4)); // 100
console.log(sumCubes(10)); // 3025
console.log(sumCubes(123)); // 58155876
