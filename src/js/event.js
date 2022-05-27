function none(arr, fun) {
  return arr.some(fun) === false;
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  })
); // true;

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  })
); // false;
