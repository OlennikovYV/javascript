function explode(x) {
  const filteredArr = x.filter(foo => typeof foo === 'number');
  return filteredArr.length
    ? Array(filteredArr.reduce((sum, number) => sum + number, 0)).fill(x)
    : 'Void!';
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
