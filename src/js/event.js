function houseNumbersSum(inputArray) {
  return inputArray
    .slice(0, inputArray.indexOf(0))
    .reduce((sum, digit) => sum + digit, 0);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); // 11
console.log(houseNumbersSum([4, 2, 1, 6, 0])); // 13
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])); // 10
console.log(houseNumbersSum([0, 1, 2, 3, 4, 5])); // 0
