function one(arr, fun) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (fun(arr[i])) count += 1;
  }

  return count === 1;
}

console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item < 2;
  })
); // true
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item % 2;
  })
); // false,
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  })
); // false,
