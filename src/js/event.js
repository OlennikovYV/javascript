const func = item => item % 2 == 0;

function map(arr, somefunction) {
  if (typeof somefunction != 'function')
    return 'given argument is not a function';

  if (arr.every(item => parseInt(item)) == false)
    return 'array should contain only numbers';

  return arr.map(item => somefunction(item));
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
