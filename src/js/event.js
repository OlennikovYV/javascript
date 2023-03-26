function reject(array, predicate) {
  return array.filter(el => predicate(el) == false);
}

console.log(
  reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
  })
); // [1, 3, 5]
