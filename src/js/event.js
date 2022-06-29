function minSum(arr) {
  const countPairs = arr.length / 2;
  const [...pairs] = arr;
  result = 0;

  pairs.sort((a, b) => a - b);

  for (let i = 0; i < countPairs; i += 1) {
    result += pairs[i] * pairs[arr.length - i - 1];
  }

  return result;
}

console.log(minSum([5, 4, 2, 3])); // 22
// console.log(minSum([12, 6, 10, 26, 3, 24])); // 342
// console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); // 74
