function largestPairSum(numbers) {
  let result = numbers[0] + numbers[1];
  for (let i = 0; i < numbers.length; i += 1)
    for (let j = i; j < numbers.length; j += 1) {
      if (i !== j) {
        const sumIJ = numbers[i] + numbers[j];
        if (sumIJ > result) result = sumIJ;
      }
    }

  return result;
}

console.log(largestPairSum([10, 14, 2, 23, 19])); //  42
console.log(largestPairSum([-100, -29, -24, -19, 19])); //  0
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2])); //  10
console.log(largestPairSum([-10, -8, -16, -18, -19])); //  -18
