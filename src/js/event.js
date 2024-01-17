var solution = function (firstArray, secondArray) {
  return (
    firstArray.reduce(
      (sum, _, index) =>
        sum + Math.pow(firstArray[index] - secondArray[index], 2),
      0
    ) / firstArray.length
  );
};

console.log(solution([1, 2, 3], [4, 5, 6])); // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(solution([0, -1], [-1, 0])); // 1
