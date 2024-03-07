function explode(x) {
  const isIncludesNumber = x.some(el => typeof el == 'number');
  const sumNumber = x.reduce(
    (sum, el) => (typeof el == 'number' ? sum + el : sum),
    0
  );

  return isIncludesNumber ? Array(sumNumber).fill(x) : 'Void!';
}

console.log(explode([9, 3]));
// [
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
//   [9, 3],
// ]
console.log(explode(['a', 3]));
// [
//   ['a', 3],
//   ['a', 3],
//   ['a', 3],
// ]
console.log(explode([6, 'c']));
// [
//   [6, 'c'],
//   [6, 'c'],
//   [6, 'c'],
//   [6, 'c'],
//   [6, 'c'],
//   [6, 'c'],
// ]
console.log(explode(['a', 'b'])); // 'Void!'
console.log(explode(['a', 0])); // []
