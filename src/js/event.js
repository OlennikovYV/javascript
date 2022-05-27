function none(arr, fun) {
  return arr.filter(fun).length === 0;
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
