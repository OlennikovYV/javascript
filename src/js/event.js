function all(arr, fun) {
  return arr.every(fun);
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  })
); // true

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  })
); // false
