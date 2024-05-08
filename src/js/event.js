function modifiedSum(a, n) {
  return a.reduce((sum, number) => sum + Math.pow(number, n) - number, 0);
}

console.log(modifiedSum([1, 2, 3], 3)); // 30
console.log(modifiedSum([1, 2], 5)); // 30
