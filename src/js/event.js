function sumOfDifferences(arr) {
  const result = 0;
  let [...calcArray] = arr;

  if (calcArray.length < 2) return 0;

  calcArray.sort((a, b) => b - a);

  for (let i = 0; i < calcArray.length - 1; i += 1) {
    result += calcArray[i] - calcArray[i + 1];
  }

  return result;
}

console.log(sumOfDifferences([])); // 0
console.log(sumOfDifferences([-1])); // -1
console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
