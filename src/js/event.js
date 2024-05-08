function modifiedSum(a, n) {
  const sumOfPower = a.reduce((sum, number) => sum + Math.pow(number, n), 0);
  const sum = a.reduce((sum, number) => sum + number, 0);

  return sumOfPower - sum;
}

console.log(modifiedSum([1, 2, 3], 3)); // 30
console.log(modifiedSum([1, 2], 5)); // 30
