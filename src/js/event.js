const func = item => (item & 1) == 0;

function map(arr, func) {
  if (typeof func != 'function') return 'given argument is not a function';
  if (arr.length < 1 || arr.some(isNaN))
    return 'array should contain only numbers';
  return arr.map(func);
}

console.log(map([27, 18, 5, '8', '66'], func));
// [
//   false,
//   true,
//   false,
//   true,
//   true,
// ]
console.log(map([48, 33, 2, 1], 'str'));
// 'given argument is not a function'
console.log(map([8, 12, 't'], func));
// 'array should contain only numbers'
