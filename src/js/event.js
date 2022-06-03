function sumOfDifferences(arr) {
  const result = [];
  let [...calcArray] = arr;

  if (calcArray.length < 2) return 0;

  calcArray.sort((a, b) => b - a);
  for (let i = 0; i < calcArray.length - 1; i += 1) {
    result.push(calcArray[i] - calcArray[i + 1] || 0);
  }

  return result.reduce((acc, el) => acc + el);
}

console.log(sumOfDifferences([])); // 0
console.log(sumOfDifferences([-1])); // -1
console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
