function twosDifference(input) {
  return input
    .sort((a, b) => a - b)
    .filter((digit, _, arr) => arr.indexOf(digit + 2) !== -1)
    .map(digit => [digit, digit + 2]);
}

console.log(twosDifference([1, 2, 3, 4]));
// [
//   [1, 3],
//   [2, 4]
// ]
console.log(twosDifference([1, 3, 4, 6]));
// [
//   [1, 3],
//   [4, 6]
// ]
console.log(twosDifference([0, 3, 1, 4]));
// [
//   [1, 3]
// ]
