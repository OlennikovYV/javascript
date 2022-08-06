function sumOfN(n) {
  let result = [0];

  for (let i = 1; i < Math.abs(n) + 1; i += 1) {
    result.push(result[i - 1] + i);
  }

  if (n < 0) result = result.map(el => (el === 0 ? 0 : -el));

  return result;
}

console.log(sumOfN(3)); // [0, 1, 3, 6]
console.log(sumOfN(-4)); // [0, -1, -3, -6, -10]
console.log(sumOfN(1)); // [0, 1]
console.log(sumOfN(-6)); // [0, -1, -3, -6, -10, -15, -21]
